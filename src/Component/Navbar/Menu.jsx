import React from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const location = useLocation();

  const navLinks = [
    { name: "Photography", path: "/photography" },
    { name: "Films", path: "/Films" },
    { name: "Contact Us", path: "/contact" },
    { name: "Editorial", path: "/Editorial" },
    { name: "More", path: "/more" },
  ];

  // check: home page or not
  const isHome = location.pathname === "/";

  return (
    <ul
      className={`hidden md:flex bg-transparent items-center gap-8 text-md tracking-wide ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      {navLinks.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:opacity-70 transition"
        >
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
