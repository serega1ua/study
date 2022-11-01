import React, { useState } from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, type, placeholder }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <label className="text-lightred text-sm mb-3">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-sm bg-gray rounded mb-8 placeholder:text-white pl-2 pr-64 py-4 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
