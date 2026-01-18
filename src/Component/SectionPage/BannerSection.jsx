import React from "react";
import banner from "../../assets/banner.png";
import Logo from "../../assets/logotwo.webp";
import Headline from '../../assets/headline.webp'
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useUser } from "../../Context/Context";

function Bannersection() {
  const { landingPageData } = useUser();
  const data = landingPageData?.bannerSection;

  return (
    <section className="w-full bg-[#f3eee6] ">

      {/* ================= HERO ================= */}
      <div className="relative w-full h-[80vh] min-h-[540px] -mt-60">
        <img
          src={banner}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <div className="max-w-xl text-white space-y-6">
            <h1
              className="text-4xl md:text-5xl font-light tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <img src={Headline} alt="" />
            </h1>

            <p
              className="text-sm md:text-base opacity-90 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {data?.description}
            </p>

            <button className="bg-[#a38a55] hover:opacity-90 text-white px-8 py-3 text-sm tracking-wide rounded-md transition">
              Visit Ibtida.Co
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER / OUTRO ================= */}
  
    </section>
  );
}

export default Bannersection;
