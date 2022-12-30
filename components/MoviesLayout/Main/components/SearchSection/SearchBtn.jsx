import React from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {searchMovies} from "../../../../../app/features/moviesReducer";

export const SearchBtn = ({searchQuery}) => {
    const dispatch = useDispatch();
  return (
    <Link id="search-btn" onClick={() => dispatch(searchMovies({query: searchQuery, genre: ""}))} href={`/search/${searchQuery}`} className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4">
      Search
    </Link>
  );
};
