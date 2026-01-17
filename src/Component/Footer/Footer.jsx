import React from 'react'
import Logo from "../../assets/logotwo.webp";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useUser } from "../../Context/Context";

export default function Footer() {
    const { landingPageData } = useUser();
      const data = landingPageData?.bannerSection;
  return (
    <div>
            <div className="w-full mt-auto flex flex-col items-center justify-center gap-8 pt-10 border-t border-[#97824e]/20">
        <img
          src={Logo}
          alt="Logo"
          className="w-[100px] h-auto object-contain opacity-90"
        />

        {/* Icons */}
        <div className="flex gap-8">
          <FaInstagram className="text-black/70 hover:text-black text-xl cursor-pointer transition-colors" />
          <FaFacebookF className="text-black/70 hover:text-black text-xl cursor-pointer transition-colors" />
          <FaXTwitter className="text-black/70 hover:text-black text-xl cursor-pointer transition-colors" />
        </div>

        <div className="text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 text-sm opacity-70" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 'bold' }}>
          <div className="flex gap-8">
            <p>{data?.contact?.locations}</p>
            <p>{data?.contact?.phone}</p>
          </div>

          <div className="flex gap-8">
            <p>Privacy Policy</p>
            <p>{data?.contact?.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
