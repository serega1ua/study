import React, { useContext } from "react";
import TextInput from "../../../../Forms/TextInput";
import { Context } from "../../../../../context/MainContext";
import TextArea from "../../../../Forms/TextArea";
import ResetBtn from "../../../../Forms/ResetBtn";
import SubmitBtn from "../../../../Forms/SubmitBtn";
import Select from "../../../../Forms/Select";

const Popup = ({ heading, isEdit, movie }) => {
  const { isShowEditPopup, setIsShowEditPopup, isShowPopup, setIsShowPopup } =
    useContext(Context);
  const options = [
    { name: "Crime", id: 1 },
    { name: "Documentary", id: 2 },
    { name: "Horror", id: 3 },
    { name: "Comedy", id: 4 },
  ];
  return (
    <>
      {!isEdit && isShowPopup && !movie && (
        <div className="fixed flex flex-col top-9 bottom-11 shadow-lg items-center left-1/2 -translate-x-1/2 justify-start inset-0 z-10 p-3 text-white bg-black w-popup">
          <div className="flex flex-col">
            <button onClick={() => setIsShowPopup(!isShowPopup)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="humbleicons hi-times w-16 absolute right-3 text-white"
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
            <h1 className="text-5xl text-white mt-16 mb-9">{heading}</h1>
            <div className="flex">
              <div className="flex flex-col mr-8 basis-1/2">
                <TextInput placeholder="Title:" label="TITLE" type="text" />
              </div>
              <div className="flex flex-col basis-1/2">
                <TextInput
                  placeholder="Date: "
                  label="RELEASE DATE"
                  type="date"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col mr-8 basis-1/2">
                <TextInput
                  placeholder="Movie URL: "
                  label="MOVIE URL"
                  type="text"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <TextInput placeholder="Rating" label="RATING" type="number" />
              </div>
            </div>
            <div className="flex min-w-full">
              <div className=" flex flex-col basis-1/2 mr-8">
                <Select items={options} label="GENRE" />
              </div>
              <div className="min-w-fit basis-1/2 flex flex-col">
                <TextInput
                  placeholder="Runtime"
                  label="RUNTIME"
                  type="number"
                />
              </div>
            </div>
            <TextArea placeholder="Overview" label="OVERVIEW" rows={5} />

            <div className="flex justify-end max-w-full">
              <ResetBtn />
              <SubmitBtn isEdit={false} />
            </div>
          </div>
        </div>
      )}
      {isEdit && isShowEditPopup && movie && (
        <div className="fixed flex flex-col items-center justify-start top-9 bottom-9 p-3 shadow-lg left-1/2 -translate-x-1/2 inset-0 z-10  text-white bg-black w-popup">
          <div className="flex flex-col">
            <button onClick={() => setIsShowEditPopup(!isShowEditPopup)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="humbleicons hi-times w-16 absolute right-3 text-white"
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
            <h1 className="text-5xl text-white mt-16 mb-9">{heading}</h1>
            <div className="flex">
              <div className="flex flex-col mr-8 basis-1/2">
                <TextInput
                  placeholder={movie.title}
                  label="TITLE"
                  type="text"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <TextInput
                  placeholder={movie.date}
                  label="RELEASE DATE"
                  type="date"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col mr-8 basis-1/2">
                <TextInput
                  placeholder="dssdsdsdsdsdsd"
                  label="MOVIE URL"
                  type="text"
                />
              </div>
              <div className="flex flex-col basis-1/2">
                <TextInput
                  placeholder={movie.rate}
                  label="RATING"
                  type="number"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col basis-1/2 mr-8">
                <Select items={options} label="GENRE" />
              </div>
              <div className="flex flex-col basis-1/2">
                <TextInput
                  placeholder={movie.runtime}
                  label="RUNTIME"
                  type="number"
                />
              </div>
            </div>
            <TextArea placeholder={movie.overview} label="OVERVIEW" rows={5} />
            <div className="flex justify-end max-w-full">
              <ResetBtn />
              <SubmitBtn isEdit={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
