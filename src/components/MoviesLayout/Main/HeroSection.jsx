import React, { useContext } from "react";
import MovieDetails from "../../MovieDetails/MovieDetails";
import { SearchSection } from "./components/SearchSection/SearchSection";
import Header from "./Header";
import "./HeroSection.css";
import PropTypes from "prop-types";
import { Context } from "../../../context/MainContext";

export const HeroSection = () => {
  const { isSelectedMovie, selectedMovie } = useContext(Context);
  return (
    <>
      {!isSelectedMovie && (
        <div className="hero-section h-96 flex flex-col justify-start border-lightgray border-b-8">
          <Header />
          <SearchSection />
        </div>
      )}
      {isSelectedMovie && <MovieDetails movie={selectedMovie} />}
    </>
  );
};

HeroSection.propTypes = {
  isSelectedMovie: PropTypes.bool,
};
