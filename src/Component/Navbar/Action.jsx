import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Action() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const iconColor = isHome ? "text-white" : "text-black";

  return (
    <div>
      <div className="flex flex-row gap-10 items-center">
        <Instagram
          className={`w-5 h-5 cursor-pointer hover:opacity-70 transition ${iconColor}`}
        />
        <FaFacebookF
          className={`w-5 h-5 cursor-pointer hover:opacity-70 transition ${iconColor}`}
        />
        <FaXTwitter
          className={`w-5 h-5 cursor-pointer hover:opacity-70 transition ${iconColor}`}
        />
         <Link to='/Contact'>
        <button
          className="bg-[#8B7A4A] text-white px-5 py-2 text-sm rounded-md 
          hover:opacity-90 transition -mt-2"
          >
          Get In Touch
        </button>
          </Link>
      </div>
    </div>
  );
}

export default Action;
