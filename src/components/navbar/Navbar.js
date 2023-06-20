import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Logo,
  Home,
  Group,
  Allgroup,
  Graph,
  Notepad,
  Settings,
  Settingnotepad,
  Manualsettings,
  Warrantyicon,
  Contactusicon,
  Signout,
} from "../../customlogo/logo";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: <Home color={selectedMenu === 0 ? "white" : "orange"} />,
    },
    {
      title: "Media",
      path: "/contact",
      icon: <Group color={selectedMenu === 1 ? "white" : "orange"} />,
    },
    {
      title: "Group",
      path: "/team",
      icon: <Allgroup color={selectedMenu === 2 ? "white" : "orange"} />,
    },
    {
      title: "team Graph",
      path: "/team",
      icon: <Graph color={selectedMenu === 3 ? "white" : "orange"} />,
    },
    {
      title: "notePad",
      path: "/notepad",
      icon: <Notepad color={selectedMenu === 4 ? "white" : "orange"} />,
    },
    {
      title: "Settings",
      path: "/tools",
      icon: <Settings color={selectedMenu === 5 ? "white" : "orange"} />,
    },
    {
      title: "Settingnotepad",
      path: "/clipboard",
      icon: <Settingnotepad color={selectedMenu === 6 ? "white" : "orange"} />,
    },
    {
      title: "Manualsettings",
      path: "/document",
      icon: <Manualsettings color={selectedMenu === 7 ? "white" : "orange"} />,
    },
    {
      title: "Warrantyicon",
      path: "/policy",
      icon: <Warrantyicon color={selectedMenu === 8 ? "white" : "orange"} />,
    },
    {
      title: "Contactusicon",
      path: "/helpline",
      icon: <Contactusicon color={selectedMenu === 9 ? "white" : "orange"} />,
    },
    {
      title: "Signout",
      path: "/logout",
      icon: <Signout color={selectedMenu === 10 ? "white" : "orange"} />,
    },
  ];

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <div>
      <div className="bg-dark-purpel duration-300 h-full p-5 pt-8 w-35 relative">
        <Logo />

        <ul className="pt-2">
          {menuItems.map((menu, index) => (
            <li
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 ${
                selectedMenu === index ? "bg-dark-blue" : ""
              }`}
              onClick={() => handleMenuClick(index)}
              key={index}
            >
              <Link to={menu.path}>
                <span className="text-2xl block float-left">{menu.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
