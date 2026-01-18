import React from "react";
import Logo from "../../assets/logotwo.webp";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useUser } from "../../Context/Context";

export default function Footer() {
  const { landingPageData } = useUser();
  const data = landingPageData?.bannerSection;
  return (
    <div className="bg-[#f3efe6]">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-12">
        <div className="flex flex-col items-center gap-10">
          <img
            src={Logo}
            alt="House On The Clouds"
            className="w-[110px] opacity-90"
          />

          <div className="flex gap-6">
            <FaInstagram className="text-black/70 hover:text-black cursor-pointer" />
            <FaFacebookF className="text-black/70 hover:text-black cursor-pointer" />
            <FaXTwitter className="text-black/70 hover:text-black cursor-pointer" />
          </div>

          <div
            className="flex flex-col md:flex-row gap-6 md:gap-16 text-sm text-black/70 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <p>Mumbai · Bangalore</p>
            <p>{data?.contact?.phone}</p>
            <p>Privacy Policy</p>
            <p>{data?.contact?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
