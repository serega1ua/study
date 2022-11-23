import React from "react";
import {
  sortMoviesByReleaseDate,
  sortMoviesByRating,
  filterMoviesByGenres,
} from "../../../../../app/features/moviesReducer";
import { useDispatch } from "react-redux";

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const sortMoviesList = (type, order = "desc") => {
    if (type === "release_date") {
      dispatch(sortMoviesByReleaseDate(order));
    } else if (type === "vote_average") {
      dispatch(sortMoviesByRating(order));
    }
  };
  const filterByGenres = (genre) => {
    dispatch(filterMoviesByGenres(genre));
  };
  return (
      <div className="bg-black py-5 max-w-5xl justify-between flex m-auto border-mediumgray border-b-2">
        <div className="flex justify-between">
          <nav className="mr-8">
            <a
                onClick={() => filterByGenres("")}
                className="text-white text-base uppercase border-lightred border-b-4 pb-5"
                href="#"
            >
              All
            </a>
          </nav>
          <nav className="mr-8">
            <a
                onClick={() => filterByGenres("Documentary")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href="#"
            >
              Documentary
            </a>
          </nav>
          <nav className="mr-8">
            <a
                onClick={() => filterByGenres("Comedy")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href="#"
            >
              Comedy
            </a>
          </nav>
          <nav className="mr-8">
            <a
                onClick={() => filterByGenres("Horror")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href="#"
            >
              Horror
            </a>
          </nav>
          <nav>
            <a
                onClick={() => filterByGenres("Crime")}
                className="text-white text-base uppercase focus:border-lightred focus:border-b-4 focus:pb-5  hover:border-lightred hover:border-b-4 hover:pb-5"
                href="#"
            >
              Crime
            </a>
          </nav>
        </div>
        <div className="flex justify-center">
          <nav>
            <a
                href="#"
                className="text-white text-base uppercase mr-8 text-opacity-60"
            >
              Sort by
            </a>
          </nav>
          <nav className="flex">
            <select className="release-date-custom-select bg-transparent text-white  flex items-center text-base uppercase">
              <option
                  onClick={() => sortMoviesList("release_date", "")}
                  defaultValue=""
                  className="text-black"
              >
                Release Date
              </option>
              <option
                  onClick={() => sortMoviesList("release_date", "desc")}
                  value="new"
                  className="text-black"
              >
                New
              </option>
              <option
                  onClick={() => sortMoviesList("release_date", "asc")}
                  value="old"
                  className="text-black"
              >
                Old
              </option>
              <option
                  onClick={() => sortMoviesList("vote_average", "")}
                  defaultValue=""
                  className="text-black"
              >
                Rating
              </option>
              <option
                  onClick={() => sortMoviesList("vote_average", "desc")}
                  value="higher"
                  className="text-black"
              >
                Higher
              </option>
              <option
                  onClick={() => sortMoviesList("vote_average", "asc")}
                  value="lower"
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
