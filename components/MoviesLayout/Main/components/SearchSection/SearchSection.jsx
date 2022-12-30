import React, { useState} from "react";
import SearchBar from "./SearchBar";
import { SearchBtn } from "./SearchBtn";
import {useRouter} from "next/router";

export const SearchSection = () => {
  const router = useRouter();
  const {searchQuery} = router.query;
  const [searchQueryVal, setSearchQueryVal] = useState(searchQuery);
  return (
        <div className="flex flex-col items-start justify-center">
          <div className="m-auto">
            <h1 className="uppercase mb-9 text-left text-white text-4xl">
              Find your movie
            </h1>
            <div className="flex flex-row items-center justify-center">
              <SearchBar placeholder={!searchQueryVal ? "What do you want to watch?" : searchQueryVal} searchQueryVal={searchQueryVal} onChangeFun={(e) => setSearchQueryVal(e.target.value)} />
              <SearchBtn searchQuery={searchQueryVal} />
            </div>
          </div>
        </div>
  );
};
