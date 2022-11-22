import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/MainContext";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { postMovie } from "../../app/features/moviesReducer";

const SubmitBtn = ({ isEdit }) => {
  const navigate = useNavigate();
  const {
    isShowPopup,
    setIsShowPopup,
    isShowEditPopup,
    setIsShowEditPopup,
    isShowSuccessAddedPopup,
    setIsShowSuccessAddedPopup,
  } = useContext(Context);
  const dispatch = useDispatch();
  const navigateAndClosePopup = () => {
    navigate("/movies#success-added-movie");
    dispatch(postMovie());
    setIsShowPopup(!isShowPopup);
    setIsShowSuccessAddedPopup(true);
  };
  const navigateAndClosePopupAfterEditing = () => {
    navigate("/movies#success-edited-movie");
    setIsShowEditPopup(!isShowEditPopup);
  };
  return (
    <>
      <button
        onClick={
          !isEdit ? navigateAndClosePopup : navigateAndClosePopupAfterEditing
        }
        className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4"
      >
        Submit
      </button>
    </>
  );
};

SubmitBtn.propTypes = {
  isEdit: PropTypes.bool,
};

export default SubmitBtn;
