import React from "react";
import banner from "../../assets/banner.png";
import headline from "../../assets/headline.webp";

function Bannersection() {
  return (
    <div className=" bg-[#f3eee6] py-12">
      <div className="w-full h-[70vh] overflow-hidden -translate-y-60">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-[center_29%]"
        />
      </div>
      <div className=" -translate-y-223 translate-x-36 max-w-xl  ">
        <div className="w-full h-[100px] overflow-hidden">
          <img
            src={headline}
            alt="headline"
            className="w-full h-full object-cover object-left"
          />
        </div>

        <p
          className="max-w-2xl mx-auto text-sm md:text-base leading-normal opacity-60"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Ibtida is our finest offering with fine-art editorial style
          photography lead by Siddharth Sharma, founder of House On The Clouds.
          The essence of Ibtida is to create photographs that stand the test of
          time. The classic, non-intrusive approach of documenting the most
          important day of your life with bright and airy images that take you
          back in time. This is an exclusive package which we offer to selected
          weddings only and we believe this deserves a website of its own. Click
          below to visit Ibtida.Co
        </p>
        <button className="bg-[#97824e] hover:opacity-90 text-white px-9 py-6 text-sm tracking-wide rounded-md -translate-x- translate-y-5">
          {" "}
          Visit Ibtido.Co
        </button>
      </div>
    </div>
  );
}

export default Bannersection;
