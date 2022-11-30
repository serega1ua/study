import React from "react";
import SearchBar from "./SearchBar";
import { SearchBtn } from "./SearchBtn";

export const SearchSection = () => {
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="m-auto">
        <h1 className="uppercase mb-9 text-left text-white text-4xl">
          Find your movie
        </h1>
        <div className="flex flex-row items-center justify-center">
          <SearchBar />
          <SearchBtn />
        </div>
      </div>
    </div>
  );
};
