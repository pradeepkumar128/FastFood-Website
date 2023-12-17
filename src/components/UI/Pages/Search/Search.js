import React from "react";
import "./Search.css";

const Search = (props) => {
  const { searchValue, handleChange } = props;

  return (
    <>
      <div className="dataSearch_area">
        <input
          type="text"
          placeholder="Search Food..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Search;
