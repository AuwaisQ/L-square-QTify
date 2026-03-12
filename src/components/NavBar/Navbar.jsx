import React from "react";
import { Link } from "react-router-dom";
import ShareButton from "../ShareButton/ShareButton";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <ShareButton children={"Give Feedback"} />
    </nav>
  );
}

export default Navbar;
