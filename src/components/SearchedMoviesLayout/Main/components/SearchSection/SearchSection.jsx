import React, { useState} from "react";
import SearchBar from "./SearchBar";
import { SearchBtn } from "./SearchBtn";
import {useParams} from "react-router-dom";

export const SearchSection = () => {
  const {searchQuery} = useParams();
  const [searchQ, setSearchQ] = useState(searchQuery);
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="m-auto">
        <h1 className="uppercase mb-9 text-left text-white text-4xl">
          Find your movie
        </h1>
        <div className="flex flex-row items-center justify-center">
          <SearchBar placeholder={!searchQ ? "What do you want to watch?" : searchQ} searchQueryVal={searchQ} onChangeFun={(e) => setSearchQ(e.target.value)} />
          <SearchBtn searchQuery={searchQ} />
        </div>
      </div>
    </div>
  );
};
