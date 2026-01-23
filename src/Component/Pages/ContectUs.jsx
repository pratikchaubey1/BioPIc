import React from "react";
import Img from "../../assets/Contact.webp";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function ContectUs() {
  return (
    <div className="bg-[#f3efe6]">
      {/* Banner Image */}
      <div className="w-full h-[65vh] bg-black overflow-hidden relative">
        <img
          src={Img}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Content */}
      <div className="w-full bg-[#f7efe6] flex justify-center py-20">
        <div className="text-center max-w-3xl px-4">
          <p
            className="text-[15px] leading-relaxed text-[#6b4f3a] mb-4"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Please fill in the form below and provide as much details as
            possible to help us create an accurate quote.
          </p>

          <p
            className="text-[15px] leading-relaxed text-[#6b4f3a] mb-4"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            We will try to get back within 48hrs, give us a call on the number
            below if you don’t hear from us or if its a last minute enquiry.
          </p>

          <p
            className="text-[15px] leading-relaxed text-[#6b4f3a] mb-8"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Please go through our FAQ section to find answers to some common
            questions.
          </p>

          <p
            className="text-[15px] text-[#6b4f3a] mb-2"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            hello@houseone.com
          </p>

          <p
            className="text-[15px] text-[#6b4f3a] mb-6"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            +91 9621549873
          </p>

          <p
            className="text-[15px] text-[#6b4f3a] mb-2"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            House On The Clouds Private Limited
          </p>

          <p
            className="text-[15px] text-[#6b4f3a] mb-8"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Site no 237, 2nd Floor <br />
            Vidyagiri Layout, Nagarbhavi Circle <br />
            Bengaluru, KA 560072
          </p>

          {/* City */}
          <p
            className="text-[15px] text-[#6b4f3a] mb-6"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Mumbai . Bangalore
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-[#000] text-lg">
            <FaInstagram className="cursor-pointer hover:opacity-70" />
            <FaFacebookF className="cursor-pointer hover:opacity-70" />
            <FaXTwitter className="cursor-pointer hover:opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContectUs;
