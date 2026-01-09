import React from "react";
import Icon from "./Icon";
import Menu from "./Menu";
import Action from "./Action";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="w-full flex items-center justify-between px-8 py-6">
        <Icon />
        <Menu />
        <Action />
      </div>
    </nav>
  );
}

export default Navbar;
