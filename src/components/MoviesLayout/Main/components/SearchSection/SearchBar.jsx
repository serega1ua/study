import React from "react";
import {searchMovies} from "../../../../../app/features/moviesReducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const SearchBar = ({searchQueryVal, onChangeFun, placeholder}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <input
        placeholder={placeholder}
        value={searchQueryVal}
        onKeyDown={(e) => {
          if(e.key === "Enter") {
            dispatch(searchMovies({query: searchQueryVal, genre: "", sortBy: "", sortOrder: ""}));
            navigate(`/search/${searchQueryVal}`);
          }
        }}
        onChange={onChangeFun}
      className="bg-darkgray opacity-50 w-ultraxxl pl-4 rounded py-4 text-white text-xl placeholder:text-xl"
    />
  );
};

export default SearchBar;
