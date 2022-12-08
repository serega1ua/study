import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchMovies} from "../../../../../app/features/moviesReducer";

export const SearchBtn = ({searchQuery}) => {
    const dispatch = useDispatch();
  return (
    <NavLink onClick={() => dispatch(searchMovies({query: searchQuery, genre: ""}))} to={`/search/${searchQuery}`} className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4">
      Search
    </NavLink>
  );
};
