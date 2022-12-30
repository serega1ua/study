import React  from "react";
import PropTypes from "prop-types";
import CalendarIcon from "../../public/static/calendar-icon.svg";

const TextInput = ({ label, type, placeholder, value, handleChange, name, handleBlur }) => {
  return (
    <>
      <label className="text-lightred text-sm mb-3">{label}</label>
      {type === "date" && (
        <div className="bg-gray rounded mb-2 flex w-full justify-between">
          <input
              name={name}
            type={type}
              onBlur={handleBlur}
            placeholder={placeholder}
            className="text-sm bg-gray  rounded pl-2 pr-72 py-4 placeholder:text-white text-white"
            value={value}
            onChange={handleChange}
          />
          <button className="pl-2 pr-2">
            <img src={CalendarIcon} alt="calendar icon" className="w-12 h-12" />
          </button>
        </div>
      )}
      {type !== "date" && (
        <>
          <input
              name={name}
              type={type}
              onBlur={handleBlur}
              placeholder={placeholder}
              className="bg-gray rounded pl-2 mb-2 pr-64 py-4 text-sm  placeholder:text-white text-white"
              value={value}
              onChange={handleChange}
          />
        </>
      )}
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
