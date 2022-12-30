import React, {useContext, useEffect} from "react";
import { Context } from "../../../../../context/MainContext";
import useRoute from "../../../../../hooks/useRoute";
import usePopup from "../../../../../hooks/usePopup";
import {deleteSelectedMovie, fetchMovies} from "../../../../../app/features/moviesReducer";
import {useDispatch} from "react-redux";

const DeletePopup = ({movieId}) => {
  const contextData = useContext(Context);
  const navigateToPage = useRoute("/movies");
  const closePopup = usePopup(
    navigateToPage,
    contextData?.setIsShowDeletePopup,
    contextData?.isShowDeletePopup
  );
  const dispatch = useDispatch();
  const deleteMovie = () => {
    dispatch(deleteSelectedMovie({movieId: movieId}));
    navigateToPage();
  }
  const deleteMovieAndClosePopup = () => {
    deleteMovie();
    closePopup();
  }
  return (
    <div className="bg-black shadow-lg z-50 fixed left-1/2 -translate-x-1/2 h-96 top-20 w-ultraxxl flex flex-col items-center justify-center">
      <div className="flex flex-col items-end m-auto text-center justify-start">
        <button className="absolute top-1 right-3" onClick={closePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="humbleicons hi-times w-16 text-white"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M18 18L6 6" />
            </g>
          </svg>
        </button>
        <div className="flex flex-col justify-center items-start mb-12">
          <h1 className="text-white uppercase text-4xl mb-9">Delete MOVIE</h1>
          <p className="text-white text-xl">
            Are you sure you want to delete this movie?
          </p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={deleteMovieAndClosePopup}
            className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
