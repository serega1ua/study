import React, { useState } from "react";
import PropTypes from "prop-types";
import CalendarIcon from "../../assets/calendar-icon.svg";

const TextInput = ({ label, type, placeholder }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <label className="text-lightred text-sm mb-3">{label}</label>
      {type === "date" && (
        <div className="bg-gray rounded mb-8 flex min-w-full justify-between">
          <input
            type={type}
            placeholder={placeholder}
            className="text-sm bg-gray rounded pl-2 pr-72 py-4 placeholder:text-white text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="pl-2 pr-2">
            <img src={CalendarIcon} alt="calendar icon" className="w-12 h-12" />
          </button>
        </div>
      )}
      {type !== "date" && (
        <input
          type={type}
          placeholder={placeholder}
          className="bg-gray rounded pl-2 mb-8 pr-64 py-4 text-sm  placeholder:text-white text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
