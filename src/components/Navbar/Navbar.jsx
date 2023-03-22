import React from "react";
import classes from "./Navbar.module.css";
import { HiOutlineMenu, AiFillYoutube } from "../../assets/icon";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logoContainer}>
        <button className={classes.hamburger}>
          <HiOutlineMenu  size="25" />
        </button>
       
          <Link className={classes.logo}>
            <AiFillYoutube size="30" color="#ff3b30" />
            <h3>MyTube</h3>
          </Link>
       
      </div>
      <Link className={classes.account}>Login</Link>
    </nav>
  );
};

export default Navbar;
