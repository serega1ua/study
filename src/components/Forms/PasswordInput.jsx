import React, { useState } from "react";
import PropTypes from "prop-types";

const PasswordInput = ({ label, type }) => {
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState(type);
  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    }
    if (inputType === "text") {
      setInputType("password");
    }
  };
  return (
    <>
      <label className="text-lightred mb-3">{label}</label>
      <div className="flex bg-gray rounded pr-2">
        <input
          type={inputType}
          placeholder="Password:"
          className="bg-gray rounded placeholder:text-white pl-2 pr-64 py-4 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={togglePassword}>
          {inputType === "password" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="humbleicons hi-eye w-6 text-lightred"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12c5.4-8 12.6-8 18 0-5.4 8-12.6 8-18 0z"
              />
              <path
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
          {inputType === "text" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="humbleicons hi-eye-off w-6 text-lightred"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5l16 16M11.148 9.123a3 3 0 013.722 3.752M8.41 6.878C12.674 4.762 17.267 6.47 21 12c-1.027 1.521-2.119 2.753-3.251 3.696m-2.509 1.59C11.076 19.142 6.631 17.38 3 12c1.01-1.496 2.083-2.713 3.196-3.65"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default PasswordInput;
