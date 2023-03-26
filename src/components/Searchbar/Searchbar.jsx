import React from "react";
import { CiSearch } from "../../assets/icon";
import { useVideo } from "../../contexts";
import classes from "./Searchbar.module.css";
const Searchbar = () => {
  const { searchTerm, dispatch } = useVideo();

  return (
    <div className={classes.container}>
      <input
        className={classes.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChange={(event) =>
          dispatch({ type: "SEARCH", payload: event.target.value })
        }
      />
      <button className={classes.searchButton}>
        <CiSearch size="17" />
      </button>
    </div>
  );
};

export default Searchbar;
