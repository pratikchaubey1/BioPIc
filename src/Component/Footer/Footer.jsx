import React from "react";
import Logo from "../../assets/logotwo.webp";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="">
      <div className="w-full h-[70vh] overflow-hidden flex flex-col items-center justify-center gap-6 -translate-x-180 -translate-y-200">
        <img
          src={Logo}
          alt="Logo"
          className="w-[100px] h-auto object-contain"
        />

        {/* Icons */}
        <div className="flex gap-6 -translate-y-5">
          <FaInstagram className="text-black text-xl cursor-pointer" />
          <FaFacebookF className="text-black text-xl cursor-pointer" />
          <FaXTwitter className="text-black text-xl cursor-pointer" />
        </div>
         <div
          className="flex justify-between items-center leading-normal gap-8"
          style={{ fontFamily: "'Cormorant Garamond', bold" }}
        >
          <p>Mumbai . Bangalore</p>
          <p>+91 9621549873</p>
        </div>

        <div
          className="flex justify-between items-center leading-normal gap-8 mt-2"
          style={{ fontFamily: "'Cormorant Garamond', bold" }}
        >
          <p>Privacy Policy</p>
          <p>hello@houseone.com</p>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
