import React, { useState} from "react";
import SearchBar from "./SearchBar";
import { SearchBtn } from "./SearchBtn";

export const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col items-start justify-center">
      <div className="m-auto">
        <h1 className="uppercase mb-9 text-left text-white text-4xl">
          Find your movie
        </h1>
        <div className="flex flex-row items-center justify-center">
          <SearchBar placeholder={!searchQuery ? "What do you want to watch?" : searchQuery} searchQueryVal={searchQuery} onChangeFun={(e) => setSearchQuery(e.target.value)} />
          <SearchBtn searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};
