import React, { useContext } from "react";
import MovieDetails from "../../MovieDetails/MovieDetails";
import { SearchSection } from "./components/SearchSection/SearchSection";
import Header from "./Header";
import styles from "./HeroSection.module.css";
import { Context } from "../../../context/MainContext";
import {useSelector} from "react-redux";

export const HeroSection = () => {
  const isSelected = useSelector((state) => state?.isSelected);
  return (
    <>
      {!isSelected && (
        <div className={`${styles.heroSection} hero-section h-96 flex flex-col justify-start border-lightgray border-b-8`}>
          <Header />
          <SearchSection />
        </div>
      )}
      {isSelected && <MovieDetails />}
    </>
  );
};

