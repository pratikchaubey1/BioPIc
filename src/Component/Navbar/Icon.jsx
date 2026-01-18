import React from "react";
import Logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";

function Icon() {
  return (
    <div className="flex items-center">
      <Link to='/'>
      <img
        src={Logo}
        alt="HOTC Logo"
        className="h-35 w-auto object-contain"
        />
        </Link>
    </div>
  );
}

export default Icon;
