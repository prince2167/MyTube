import React from "react";
import { Outlet } from "react-router-dom";
import { useVideo } from "../../contexts";
import { Navbar, Sidebar } from "../index";
import classes from "./Layout.module.css";

const Layout = () => {
  const { isMenuOpen } = useVideo();

  return (
    <>
      <Navbar />
      <div className={classes.layout}>
        {isMenuOpen && <Sidebar />}
        <main style={{ margin: "1rem 0 0 16rem" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
