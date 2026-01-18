import React from "react";
import Icon from "./Icon";
import Menu from "./Menu";
import Action from "./Action";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-[1440px] mx-auto px-10 py-6 flex items-center">

        {/* LEFT : LOGO */}
        <div className="flex-shrink-0">
          <Icon />
        </div>

        {/* CENTER-RIGHT : MENU */}
        <div className="ml-auto mr-16">
          <Menu />
        </div>

        {/* RIGHT : ACTIONS */}
        <div className="flex items-center gap-6">
          <Action />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;


