import React, {useContext, useState} from "react";
import {
  sortMoviesByReleaseDate,
  sortMoviesByRating,
  filterMoviesByGenres, searchMovies,
} from "../../../../../app/features/moviesReducer";
import { useDispatch } from "react-redux";
import searchedMovies from "../../../../../pages/SearchedMovies/SearchedMovies";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Context} from "../../../../../context/MainContext";

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const [tagReleaseDate] = useState("release_date");
  const [tagRating] = useState("vote_average");
  const {searchQuery} = useParams();
  const {currentSortBy, setCurrentSortBy, currentOrder, setCurrentOrder} = useContext(Context);
  const navigate = useNavigate();
  const sortMoviesList = (type, order) => {
    if (type === "release_date") {
      dispatch(searchMovies({query: searchQuery, genre: "", sortBy: type, sortOrder: order}));
    } else if (type === "vote_average") {
      dispatch(searchMovies({query: searchQuery, genre: "", sortBy: type, sortOrder: order}));
    }
  };
  const filterByGenres = (genre) => {
     /* dispatch(filterMoviesByGenres({filter: genre}));*/
    dispatch(searchMovies({query: searchQuery, genre: genre, sortBy: ""}));
  };
  return (
      <div className="bg-black py-5 max-w-5xl justify-between flex m-auto border-mediumgray border-b-2">
        <div className="flex justify-between">
          <nav className="mr-8">
            <NavLink
                onClick={() => filterByGenres("")}
                className="text-white text-base uppercase border-lightred border-b-4 pb-5"
                to="#"
            >
              All
            </NavLink>
          </nav>
          <nav className="mr-8">
            <NavLink
                onClick={() => filterByGenres("Documentary")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                to={`/search/${searchQuery}?genre=documentary`}
            >
              Documentary
            </NavLink>
          </nav>
          <nav className="mr-8">
            <NavLink
                onClick={() => filterByGenres("Comedy")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                to={`/search/${searchQuery}?genre=comedy`}
            >
              Comedy
            </NavLink>
          </nav>
          <nav className="mr-8">
            <NavLink
                onClick={() => filterByGenres("Horror")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                to={`/search/${searchQuery}?genre=horror`}
            >
              Horror
            </NavLink>
          </nav>
          <nav>
            <NavLink
                onClick={() => filterByGenres("Crime")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                to={`/search/${searchQuery}?genre=crime`}
            >
              Crime
            </NavLink>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav>
            <span
                className="text-white text-base uppercase mr-8 text-opacity-60"
            >
              Sort by
            </span>
          </nav>
          <nav className="flex">
            <select  onChange={(e) => {
              if(e.target.value.includes("release_date")) {
                sortMoviesList("release_date", e.target.value.slice(12).trim());
                navigate(`/search/${searchQuery}?sortBy=vote_average/${e.target.value.slice(12).trim() === "desc" ? "new" : "old"}`);
                setCurrentSortBy("release_date");
                setCurrentOrder(e.target.value.slice(12).trim());
              }
              else if(e.target.value.includes("vote_average")) {
                sortMoviesList("vote_average", e.target.value.slice(12).trim());
                navigate(`/search/${searchQuery}?sortBy=vote_average/${e.target.value.slice(12).trim() === "desc" ? "higher" : "lower"}`);
                setCurrentSortBy("vote_average");
                setCurrentOrder(e.target.value.slice(12).trim());
              }
            }} className="release-date-custom-select bg-transparent text-white  flex items-center text-base uppercase">
              <option
                  value={``}
                  className="text-black"
              >
                Release Date
              </option>
              <option
                  value={`${tagReleaseDate} desc`}
                  className="text-black"
              >
                New
              </option>
              <option
                  value={`${tagReleaseDate} asc`}
                  className="text-black"
              >
                Old
              </option>
              <option
                  value={``}
                  className="text-black"
              >
                Rating
              </option>
                <option
                    value={`${tagRating} desc`}
                    className="text-black"
                >
                  Higher
                </option>

              <option
                  value={`${tagRating} asc`}
                  className="text-black"
              >
                Lower
              </option>
            </select>
            {/* <a
            href="#"
            className="text-white flex items-center text-base uppercase"
          >
            Release date
            <img src={SelectorIcon} className="ml-1" alt="release date icon" />
          </a> */}
          </nav>
        </div>
      </div>
  );
};

export default CategoriesBar;
