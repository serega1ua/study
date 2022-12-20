import React from "react";
import PropTypes, { object } from "prop-types";

const Select = ({ items, label, name, value, handleChange, handleBlur, placeholder }) => {
    return (
        <>
            <label className="text-lightred mb-3">{label}</label>
            <>
                <select
                    value={value}
                    placeholder={placeholder}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="select-custom bg-gray text-sm rounded mb-2 placeholder:text-white pl-2 pr-80 py-4 text-white"
                    name={name}
                >
                    <option>Select Genre</option>
                    {items.map((item) => (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </>
        </>
    );
};

Select.propTypes = {
    items: PropTypes.arrayOf(object),
    label: PropTypes.string,
};

export default Select;
