import React, { useState } from "react";

// export const SearchBar = React.createElement("input", {
//   value: "",
//   onChange: (e) => (SearchBar.value = e.target.value),
//   placeholder: "Search"
// });
// export const Button = React.createElement(
//   "button",
//   { onClick: () => alert(`Search by query ${query}`) },
//   "Click to search"
// );

const SearchWrapper = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const search = () => {
    alert(`Search by query ${query}`);
  };
  return (
    <div style={{ marginBottom: "60px" }}>
      {React.createElement("input", {
        value: query,
        type: "search",
        onChange: handleSearch,
        placeholder: "Search"
      })}
      {React.createElement("button", { onClick: search }, "Click to search")}
    </div>
  );
};

export default SearchWrapper;
