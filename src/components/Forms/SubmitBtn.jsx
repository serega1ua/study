import React, { useContext } from "react";
import { Context } from "../../context/MainContext";
import PropTypes from "prop-types";
import useRoute from "../../hooks/useRoute";
import usePopup from "../../hooks/usePopup";

const SubmitBtn = ({ isEdit }) => {
  const { isShowPopup, setIsShowPopup, isShowEditPopup, setIsShowEditPopup } =
    useContext(Context);
  const navigateToEditedMovie = useRoute("/movies#success-edited-movie");
  const closePopup = usePopup(
    navigateToEditedMovie,
    setIsShowPopup,
    isShowPopup
  );
  const closeEditedPopup = usePopup(
    navigateToEditedMovie,
    setIsShowEditPopup,
    isShowEditPopup
  );
  const navigateAndClosePopup = () => {
    closePopup();
  };
  const navigateAndClosePopupAfterEditing = () => {
    closeEditedPopup();
  };

  return (
    <>
      <button
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
