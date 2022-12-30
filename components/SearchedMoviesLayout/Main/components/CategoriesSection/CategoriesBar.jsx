import React, {useContext, useState} from "react";
import {
  sortMoviesByReleaseDate,
  sortMoviesByRating,
  filterMoviesByGenres, searchMovies,
} from "../../../../../app/features/moviesReducer";
import { useDispatch } from "react-redux";
import {useRouter} from "next/router";
import Link from "next/link";
import {Context} from "../../../../../context/MainContext";

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const [tagReleaseDate] = useState("release_date");
  const [tagRating] = useState("vote_average");
  const navigate = useRouter();
  const {searchQuery} = navigate.query;
  const {currentSortBy, setCurrentSortBy, currentOrder, setCurrentOrder} = useContext(Context);
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
            <Link
                onClick={() => filterByGenres("")}
                className="text-white text-base uppercase border-lightred border-b-4 pb-5"
                href="#"
            >
              All
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Documentary")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search/${searchQuery}?genre=documentary`}
            >
              Documentary
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Comedy")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search/${searchQuery}?genre=comedy`}
            >
              Comedy
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Horror")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search/${searchQuery}?genre=horror`}
            >
              Horror
            </Link>
          </nav>
          <nav>
            <Link
                onClick={() => filterByGenres("Crime")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search/${searchQuery}?genre=crime`}
            >
              Crime
            </Link>
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
                navigate.push(`/search/${searchQuery}?sortBy=vote_average/${e.target.value.slice(12).trim() === "desc" ? "new" : "old"}`);
                setCurrentSortBy("release_date");
                setCurrentOrder(e.target.value.slice(12).trim());
              }
              else if(e.target.value.includes("vote_average")) {
                sortMoviesList("vote_average", e.target.value.slice(12).trim());
                navigate.push(`/search/${searchQuery}?sortBy=vote_average/${e.target.value.slice(12).trim() === "desc" ? "higher" : "lower"}`);
                setCurrentSortBy("vote_average");
                setCurrentOrder(e.target.value.slice(12).trim());
              }
            }} className="release-date-custom-select bg-transparent text-white  flex items-center text-base uppercase">
              <option
                  value={`${tagReleaseDate}`}
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
