import React, {useState, useContext} from "react";
import {
  sortMoviesByReleaseDate,
  sortMoviesByRating,
  filterMoviesByGenres,
} from "../../../../../app/features/moviesReducer";
import { useDispatch } from "react-redux";
import {Context} from "../../../../../context/MainContext";
import Link from "next/link";

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const [tagReleaseDate] = useState("release_date");
  const [tagRating] = useState("vote_average");
  const sortMoviesList = (type, order = "desc") => {
    if (type === "release_date") {
      dispatch(sortMoviesByReleaseDate({order}));
    } else if (type === "vote_average") {
      dispatch(sortMoviesByRating({order}));
    }
  };
  const searchQuery = "";
  const contextData = useContext(Context);
  const filterByGenres = (genre) => {
      dispatch(filterMoviesByGenres({filter: genre}));
  };
  return (
      <div className="bg-black py-5 max-w-5xl justify-between flex m-auto border-mediumgray border-b-2">
        <div className="flex justify-between">
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("")}
                className="text-white text-base uppercase border-lightred border-b-4 pb-5"
                href={`/search/`}
            >
              All
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Documentary")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search?genre=documentary`}
            >
              Documentary
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Comedy")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search?genre=comedy`}
            >
              Comedy
            </Link>
          </nav>
          <nav className="mr-8">
            <Link
                onClick={() => filterByGenres("Horror")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search?genre=horror`}
            >
              Horror
            </Link>
          </nav>
          <nav>
            <Link
                onClick={() => filterByGenres("Crime")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href={`/search?genre=crime`}
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
                //navigate(`/search?sortBy=release_date/${e.target.value.slice(12).trim() === "desc" ? "new" : "old"}`);
                contextData.setCurrentSortBy("release_date");
                contextData.setCurrentOrder(e.target.value.slice(12).trim());
              }
              else if(e.target.value.includes("vote_average")) {
                sortMoviesList("vote_average", e.target.value.slice(12).trim());
                //navigate(`/search?sortBy=vote_average/${e.target.value.slice(12).trim() === "desc" ? "higher" : "lower"}`);
                contextData.setCurrentSortBy("vote_average");
                contextData.setCurrentOrder(e.target.value.slice(12).trim());
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
                  value={`${tagRating}`}
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
