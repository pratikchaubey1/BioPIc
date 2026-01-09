import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

function Action() {
  return (
    <div>
      <div className=" flex flex-row gap-10">
        <Instagram className="w-5 h-5 text-white cursor-pointer hover:opacity-70" />
        <Facebook className="w-5 h-5 cursor-pointer text-white hover:opacity-70" />
        <Twitter className="w-5 h-5 cursor-pointer text-white hover:opacity-70" />

        <button
          className="bg-[#8B7A4A] text-white px-5 py-2 text-sm rounded-md 
                   hover:opacity-90 transition -mt-2"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
}

export default Action;
