import React, { useContext } from "react";
import { Context } from "../../../../../context/MainContext";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../../../Forms/SubmitBtn";

const SuccessAddedPopup = () => {
  const { isShowSuccessAddedPopup, setIsShowSuccessAddedPopup } =
    useContext(Context);
  const navigate = useNavigate();
  const closePopupAndNavigate = () => {
    navigate("/movies");
    setIsShowSuccessAddedPopup(false);
  };
  return (
    <div className="bg-black shadow-lg z-50 py-16 fixed left-1/2 -translate-x-1/2 top-20 w-ultraxxl flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center m-0 justify-start">
        <button
          className="absolute top-1 right-3"
          onClick={closePopupAndNavigate}
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="humbleicons hi-check-circle w-24 text-lightred mb-3"
        >
          <g
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 13l2.5 2.5L16 10"
            />
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </g>
        </svg>
        <h1 className="text-white uppercase text-4xl">congratulations !</h1>
        <p className="text-white text-xl mb-5 mt-5">
          The movie has been added to database successfully
        </p>
        <button
          onClick={closePopupAndNavigate}
          className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4"
        >
          Agree & Close
        </button>
      </div>
    </div>
  );
};

export default SuccessAddedPopup;
