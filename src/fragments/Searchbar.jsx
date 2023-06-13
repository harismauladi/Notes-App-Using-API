import React from "react";
import PropTypes from "prop-types";

function Searchbar({ isArchived, onSearchInput, local }) {
  return (
    <div className="search-bar">
      <h2>
        {isArchived === "archive"
          ? local === "en"
            ? "Archived Notes"
            : "Catatan Terarsip"
          : local === "en"
          ? "Active Notes"
          : "Catatan Aktif"}
      </h2>
      <input
        type="text"
        placeholder={local === "en" ? "Search" : "Cari"}
        onChange={(e) => onSearchInput(e)}
      />
    </div>
  );
}

Searchbar.propTypes = {
  isArchived: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired,
  local: PropTypes.string.isRequired,
};
export default Searchbar;
