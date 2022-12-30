import React from "react";
import {searchMovies} from "../../../../../app/features/moviesReducer";
import {useDispatch} from "react-redux";
import {store} from "../../../../../app/store";
import {Provider} from "react-redux";

const SearchBar = ({searchQueryVal, onChangeFun, placeholder}) => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  return (
          <input
              id="search-bar"
              role="searchbar"
              placeholder={placeholder}
              value={searchQueryVal}
              onKeyDown={(e) => {
                  if(e.key === "Enter") {
                      dispatch(searchMovies({query: searchQueryVal, genre: "", sortBy: "", sortOrder: ""}));
                      //navigate(`/search/${searchQueryVal}`);
                  }
              }}
              onChange={onChangeFun}
              className="bg-darkgray opacity-50 w-ultraxxl pl-4 rounded py-4 text-white text-xl placeholder:text-xl"
          />
  );
};

export default SearchBar;
