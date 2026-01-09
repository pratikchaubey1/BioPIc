import React from "react";


function Menu() {

   const navLinks = [
  "Photography",
  "Films",
  "Contact Us",
  "Editorial",
  "More",
];
  return (
    <ul className="hidden md:flex bg-transparent items-center gap-8 text-gray-50 text-md tracking-wide">
      {navLinks.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer hover:opacity-70 transition"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
