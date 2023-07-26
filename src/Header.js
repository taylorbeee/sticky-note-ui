import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    const searchInput = e.target.value;
    props.onSearch(searchInput);
  };

  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button onClick={props.addNote} className="add-new">
          + New Note
        </button>
        <input
          onChange={callSearch}
          value={props.searchText}
          className="search"
          type="text"
          placeholder="Type here to search..."
        />
      </aside>
    </header>
  );
};

export default Header;
