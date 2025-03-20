import React from "react";
import '../App.css';

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search Users"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
