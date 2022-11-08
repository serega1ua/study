import React, { useContext } from "react";
import { Context } from "../../../../../context/MainContext";
import { useNavigate } from "react-router-dom";

const DeletePopup = () => {
  const { isShowDeletePopup, setIsShowDeletePopup } = useContext(Context);
  const navigate = useNavigate();
  const navigateAndClosePopup = () => {
    navigate("/movies");
    setIsShowDeletePopup(!isShowDeletePopup);
  };
  return (
    <div className="bg-black shadow-lg z-50 fixed left-1/2 -translate-x-1/2 h-96 top-20 w-ultraxxl flex flex-col items-center justify-center">
      <div className="flex flex-col items-end m-auto text-center justify-start">
        <button
          className="absolute top-1 right-3"
          onClick={() => setIsShowDeletePopup(!isShowDeletePopup)}
        >
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
              stroke-linecap="round"
              stroke-width="2"
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
            onClick={navigateAndClosePopup}
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
