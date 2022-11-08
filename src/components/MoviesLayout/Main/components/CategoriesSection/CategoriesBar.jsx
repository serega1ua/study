import React from "react";
import SelectorIcon from "../../../../../assets/selector-icon.svg";

const CategoriesBar = () => {
  return (
    <div className="bg-black py-5 max-w-5xl justify-between flex m-auto border-mediumgray border-b-2">
      <div className="flex justify-between">
        <nav className="mr-8">
          <a
            className="text-white text-base uppercase border-lightred border-b-4 pb-5"
            href="#"
          >
            All
          </a>
        </nav>
        <nav className="mr-8">
          <a
            className="text-white text-base uppercase hover:border-lightred hover:border-b-4 hover:pb-5"
            href="#"
          >
            Documentary
          </a>
        </nav>
        <nav className="mr-8">
          <a
            className="text-white text-base uppercase hover:border-lightred hover:border-b-4 hover:pb-5"
            href="#"
          >
            Comedy
          </a>
        </nav>
        <nav className="mr-8">
          <a
            className="text-white text-base uppercase hover:border-lightred hover:border-b-4 hover:pb-5"
            href="#"
          >
            Horror
          </a>
        </nav>
        <nav>
          <a
            className="text-white text-base uppercase hover:border-lightred hover:border-b-4 hover:pb-5"
            href="#"
          >
            Crime
          </a>
        </nav>
      </div>
      <div className="flex justify-center">
        <nav>
          <a
            href="#"
            className="text-white text-base uppercase mr-8 text-opacity-60"
          >
            Sort by
          </a>
        </nav>
        <nav>
          <a
            href="#"
            className="text-white flex items-center text-base uppercase"
          >
            Release date
            <img src={SelectorIcon} className="ml-1" alt="release date icon" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default CategoriesBar;
