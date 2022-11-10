import React, { createContext, useState } from "react";
// import PropTypes from "prop-types";

export const Context = createContext();

const MainContextWrapper = ({ children }) => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isShowDeletePopup, setIsShowDeletePopup] = useState(false);
  const [isShowEditPopup, setIsShowEditPopup] = useState(false);
  const [isShowSuccessAddedPopup, setIsShowSuccessAddedPopup] = useState(false);
  const [isSelectedMovie, setIsSelectedMovie] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  return (
    <Context.Provider
      value={{
        isShowPopup,
        setIsShowPopup,
        isShowDeletePopup,
        setIsShowDeletePopup,
        isShowSuccessAddedPopup,
        setIsShowSuccessAddedPopup,
        isShowEditPopup,
        isSelectedMovie,
        selectedMovie,
        setSelectedMovie,
        setIsSelectedMovie,
        setIsShowEditPopup,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContextWrapper;
