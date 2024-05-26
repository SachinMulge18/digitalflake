import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from ".";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <SideBar />
          <main style={{ flexGrow: 1 }}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
