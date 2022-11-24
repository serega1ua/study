import React, {useState} from "react";
import {
  sortMoviesByReleaseDate,
  sortMoviesByRating,
  filterMoviesByGenres,
} from "../../../../../app/features/moviesReducer";
import { useDispatch } from "react-redux";

const CategoriesBar = () => {
  const dispatch = useDispatch();
  const [tagReleaseDate, setTagReleaseDate] = useState("release_date");
  const [tagRating, setTagRating] = useState("vote_average");
  const sortMoviesList = (type, order = "desc") => {
    if (type === "release_date") {
      dispatch(sortMoviesByReleaseDate({order}));
    } else if (type === "vote_average") {
      dispatch(sortMoviesByRating({order}));
    }
  };
  const filterByGenres = (genre) => {
    dispatch(filterMoviesByGenres({filter: genre}));
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
              }
              else if(e.target.value.includes("vote_average")) {
                sortMoviesList("vote_average", e.target.value.slice(12).trim());
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
