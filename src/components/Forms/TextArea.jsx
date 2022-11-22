import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ rows, placeholder, label }) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-lightred mb-3">{label}</label>
      <textarea
        className="resize-none w-details bg-gray rounded mb-8 placeholder:text-white pl-2 pr-64 py-4 text-white"
        placeholder={placeholder}
        rows={rows}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;
