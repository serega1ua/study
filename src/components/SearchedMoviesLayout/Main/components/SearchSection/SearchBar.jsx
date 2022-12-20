import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {searchMovies} from "../../../../../app/features/moviesReducer";
import {useDispatch} from "react-redux";

const SearchBar = ({searchQueryVal, onChangeFun, placeholder}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <input
        placeholder={placeholder}
        onKeyDown={(e) => {
          if(e.key === "Enter") {
            dispatch(searchMovies({query: searchQueryVal, genre: "", sortBy: "", sortOrder: ""}))
            navigate(`/search/${searchQueryVal}`);
          }
        }}
        value={searchQueryVal}
        onChange={onChangeFun}
      className="bg-darkgray opacity-50 w-ultraxxl pl-4 rounded py-4 text-white text-xl placeholder:text-xl"
    />
  );
};

export default SearchBar;
