import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar } from "../index";
import classes from "./Layout.module.css"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={classes.layout}>
        <Sidebar />
        <main style={{margin: "1rem 0 0 16rem" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
