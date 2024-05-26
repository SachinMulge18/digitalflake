import React from "react";
import { navbarlogo } from "../assets";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#662671] p-3">
      <nav className="flex justify-between items-center md:px-4">
        <img
          src={navbarlogo}
          alt="navbarlogo"
          className="h-8 w-52 md:h-10 md:w-60 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <CgProfile size={34} className="text-white cursor-pointer" />
      </nav>
    </header>
  );
};

export default Navbar;
