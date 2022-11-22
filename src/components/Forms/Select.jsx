import React from "react";
import PropTypes, { object, string } from "prop-types";

const Select = ({ items, label }) => {
  return (
    <>
      <label className="text-lightred mb-3">{label}</label>
      <select
        className="select-custom bg-gray rounded mb-8 placeholder:text-white pl-2 pr-80 h-14 py-4 text-white"
        name="select"
      >
        <option selected>Select Genre</option>
        {items.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  items: PropTypes.arrayOf(object),
  label: PropTypes.string,
};

export default Select;
