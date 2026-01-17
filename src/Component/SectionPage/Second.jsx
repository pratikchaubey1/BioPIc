import React from "react";
import left from "../../assets/left.webp";
import right from "../../assets/right.webp";
import headingImg from "../../assets/heading.webp";
import brandsImg from "../../assets/brands.webp";

import { useUser } from "../../Context/Context";

function Second() {
  const { landingPageData } = useUser();
  return (
    <section className="bg-[#f3eee6] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-row gap-10">
          {/* LEFT IMAGE */}
          <img
            src={left}
            className="w-[430px] translate-y-50 -translate-x-30"
            alt=""
          />

          {/* CENTER GRID (same as yours, ONLY FIX applied) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            {/* TEXT — FIXED */}
            <div className="md:col-span-3 mt-20 -translate-x-30">
              <p
                className="text-[15px] leading-7 w-[510px] whitespace-pre-wrap translate-y-40"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {landingPageData?.secondSection?.paragraph1}
              </p>

              <p
                className="text-[15px] leading-7 w-[510px] whitespace-pre-wrap mt-6 translate-y-40"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {landingPageData?.secondSection?.paragraph2}
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={right}
            className="w-[430px] -translate-y-10 translate-x-28 "
            alt=""
          />
        </div>

        {/* HEADING IMAGE */}
        <img
          src={headingImg}
          className="max-w-4xl mx-auto mb-20 -translate-x-10 -translate-y-120"
          alt=""
        />

        {/* BRANDS IMAGE */}
        <img
          src={brandsImg}
          className="mt-16 translate-x-110 max-w-4xl opacity-100 -translate-y-40"
          alt=""
        />
      </div>
    </section>
  );
}

export default Second;
