import React from "react";

const AddBtn = (props) => {
  return (
    <button
      {...props}
      className="uppercase text-lightred text-xl font-semibold px-14 py-4 rounded bg-lightgray bg-opacity-60"
    >
      + Add Movie
    </button>
  );
};

export default AddBtn;
