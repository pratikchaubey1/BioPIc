import React from "react";
import banner from "../../assets/banner.png";
import headline from "../../assets/headline.webp";
import Logo from "../../assets/logotwo.webp";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useUser } from "../../Context/Context";

function Bannersection() {
  const { landingPageData } = useUser();
  const data = landingPageData?.bannerSection;

  return (
    <div className="bg-[#f3eee6] py-12 flex flex-col items-center -translate-y-70">
      {/* Main Banner Image */}
      <div className="w-full h-[60vh] md:h-[70vh] overflow-hidden mb-12">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-[center_29%]"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

        {/* Text Side (Left/Center) */}
        <div className="flex flex-col gap-8 max-w-xl -translate-y-170">
          {/* Headline Image */}
          <div className="w-full max-w-md overflow-hidden ">
            <img
              src={headline}
              alt="Headline"
              className="w-full h-auto object-contain object-left"
            />
          </div>

          <p
            className="text-sm md:text-base leading-relaxed opacity-80"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {data?.description}
          </p>

          <button className="bg-[#97824e] hover:opacity-90 text-white px-9 py-4 text-sm tracking-wide rounded-md w-fit transition-all duration-300 shadow-md">
            {data?.buttonText}
          </button>
        </div>
      </div>

      {/* Footer Section */}

    </div>
  );
}

export default Bannersection;
