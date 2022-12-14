import React, { useContext } from "react";
import { Context } from "../../../../../context/MainContext";
import usePopup from "../../../../../hooks/usePopup";
import useRoute from "../../../../../hooks/useRoute";

const SuccessAddedPopup = () => {
  const { isShowSuccessAddedPopup, setIsShowSuccessAddedPopup } =
    useContext(Context);
  const navigateToPage = useRoute("/movies");
  const closePopup = usePopup(
    navigateToPage,
    setIsShowSuccessAddedPopup,
    isShowSuccessAddedPopup
  );
  return (
    <div className="bg-black z-50 fixed shadow-lg left-1/2 -translate-x-1/2 h-96 top-20 w-ultraxxl flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center m-0 justify-start">
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
        <p className="text-white text-xl">
          The movie has been added to database successfully
        </p>
      </div>
    </div>
  );
};

export default SuccessAddedPopup;
