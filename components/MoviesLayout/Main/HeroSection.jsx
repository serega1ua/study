import React, { useContext } from "react";
import MovieDetails from "../../MovieDetails/MovieDetails";
import { SearchSection } from "./components/SearchSection/SearchSection";
import Header from "./Header";
//import "./HeroSection.module.css";
import styles from "./HeroSection.module.css";
import { Context } from "../../../context/MainContext";
import {useSelector} from "react-redux";
import {Provider} from "react-redux";
import {store} from "../../../app/store";

export const HeroSection = () => {
  const isSelected = useSelector((state) => state?.isSelected);
  return (
    <Provider store={store}>
      {!isSelected && (
        <div className={`${styles.heroSection} h-96 flex flex-col justify-start border-lightgray border-b-8`}>
          <Header />
          <SearchSection />
        </div>
      )}
      {isSelected && <MovieDetails  />}
    </Provider>
  );
};
