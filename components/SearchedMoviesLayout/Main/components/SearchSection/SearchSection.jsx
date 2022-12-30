import React, { useState} from "react";
import SearchBar from "./SearchBar";
import { SearchBtn } from "./SearchBtn";
import {useRouter} from "next/router";

export const SearchSection = () => {
  const router = useRouter();
  const {searchQuery} = router.query;
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
