import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ rows, placeholder, label }) => {
  return (
    <div className="flex flex-col items-start">
      <label className="text-lightred text-sm mb-3">{label}</label>
      <textarea
        className="resize-none text-sm bg-gray rounded mb-8 placeholder:text-white pl-2 min-w-full pt-4 pb-7 text-white"
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
