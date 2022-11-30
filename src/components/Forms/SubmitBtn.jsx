import React, { useContext } from "react";
import { Context } from "../../context/MainContext";
import PropTypes from "prop-types";
import useRoute from "../../hooks/useRoute";
import usePopup from "../../hooks/usePopup";
import {useDispatch} from "react-redux";
import {fetchMovies} from "../../app/features/moviesReducer";

const SubmitBtn = ({ isEdit, disabled, postNewMovie, submitEditedMovie }) => {
  const { isShowPopup, setIsShowPopup, isShowEditPopup, setIsShowEditPopup, setIsShowSuccessAddedPopup } =
    useContext(Context);
  const navigateToEditedMovie = useRoute("/movies#success-edited-movie");
  const closePopup = usePopup(
    navigateToEditedMovie,
    setIsShowPopup,
    isShowPopup
  );
  const dispatch = useDispatch();
  const closeEditedPopup = usePopup(
    navigateToEditedMovie,
    setIsShowEditPopup,
    isShowEditPopup
  );
  const navigateAndClosePopup = () => {
    postNewMovie();
    dispatch(fetchMovies);
    closePopup();
    setIsShowSuccessAddedPopup(true);
  };
  const navigateAndClosePopupAfterEditing = () => {
    submitEditedMovie();
    dispatch(fetchMovies);
    closeEditedPopup();
  };

  return (
    <>
      <button
          type="submit"
          disabled={disabled}
        onClick={
          !isEdit ? navigateAndClosePopup : navigateAndClosePopupAfterEditing
        }
        className="text-white text-sm ml-4 rounded bg-lightred uppercase px-6 py-4"
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
