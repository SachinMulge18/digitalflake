import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { AiFillCaretRight } from "react-icons/ai";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const SideBar = () => {
  const [active, setActive] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItem = [
    { link: "Home", path: "/body/home", icon: <IoHomeOutline size={30} /> },
    { link: "State", path: "/body/state", icon: <GrMapLocation size={30} /> },
    { link: "City", path: "/body/city", icon: <FaRegBuilding size={30} /> },
    {
      link: "Wearhouse",
      path: "/body/wearhouse",
      icon: <HiOutlineBuildingLibrary size={30} />,
    },
  ];

  const handleRouteClick = (link) => {
    setActive(link);
    if (isSidebarOpen) {
      toggleMenu();
    }
  };
  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("clicked");
  };

  return (
    <>
      <aside className="hidden xl:block w-2/12 border bg-[#F4F4F4] h-screen">
        {navItem.map(({ path, link, icon }) => (
          <Link to={path} key={path} onClick={() => handleRouteClick(link)}>
            <ul
              className={`${
                active === link ? "bg-[#F4EDAF]" : "bg-transparent"
              } my-5 p-1 `}
            >
              <li className="flex items-center gap-5 justify-between px-2 py-1">
                <span className="flex items-center gap-3">
                  {icon}
                  {link}
                </span>

                <AiFillCaretRight size={24} />
              </li>
            </ul>
          </Link>
        ))}
      </aside>

      <div className="md:block lg:block sm:hidden xl:hidden fixed top-4 right-14 md:right-20 z-50">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-900"
        >
          {isSidebarOpen ? (
            <FaXmark className="h-8 w-8 text-white" />
          ) : (
            <FaBars className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* sidebar for large medium and small */}
      <div
        className={`${
          isSidebarOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        } h-screen bg-[#F4F4F4]`}
      >
        <div className="flex flex-col items-center mt-16">
          <div className="">
            {navItem.map(({ path, link, icon }) => (
              <Link
                to={path}
                key={path}
                onClick={() => {
                  handleRouteClick(link);
                  toggleMenu();
                }}
              >
                <ul
                  className={`${
                    active === link ? "bg-[#F4EDAF]" : "bg-transparent"
                  } my-5 p-1 w-full`}
                >
                  <li className="flex items-center gap-5 justify-between px-2 py-1">
                    <span className="flex items-center gap-3">
                      {icon}
                      {link}
                    </span>
                    <AiFillCaretRight size={24} />
                  </li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
