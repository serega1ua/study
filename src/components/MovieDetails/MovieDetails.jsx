import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../context/MainContext";

const MovieDetails = ({ movie }) => {
  const { setIsSelectedMovie, isSelectedMovie } = useContext(Context);
  return (
    <div className="flex flex-col items-center bg-black justify-around py-8">
      <header className="flex justify-between w-details py-3">
        <span className="text-xl text-lightred">netflixroulette</span>
        <button onClick={() => setIsSelectedMovie(!isSelectedMovie)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-search w-20 text-lightred"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" d="M20 20l-6-6" />
              <path d="M15 9.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
            </g>
          </svg>
        </button>
      </header>
      <div className="w-details flex border-lightgray border-b-8 pb-5">
        <img src={movie.poster_path} alt={movie.title} />
        <div className="flex flex-col ml-5">
          <h1 className="text-white text-4xl uppercase flex items-center">
            {movie.title}{" "}
            <span className="text-white border-white border-2 ml-5 rounded-full py-3 px-3 text-lg">
              {movie.vote_average}
            </span>
          </h1>
          <p className="text-white opacity-50 mb-4">
            {movie.genres.map((genre) => genre + " ")}
          </p>
          <div className="flex justify-start mb-5">
            <span className="text-lightred text-xl mr-4">
              {movie.release_date}
            </span>
            <span className="text-lightred text-xl">{movie.runtime}</span>
          </div>
          <div>
            <p className="text-white opacity-50 text-xl">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
