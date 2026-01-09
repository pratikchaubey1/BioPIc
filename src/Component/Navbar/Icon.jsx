import React from "react";
import Logo from "../../assets/Logo.webp";

function Icon() {
  return (
    <div className="flex items-center">
      <img
        src={Logo}
        alt="HOTC Logo"
        className="h-35 w-auto object-contain"
      />
    </div>
  );
}

export default Icon;
