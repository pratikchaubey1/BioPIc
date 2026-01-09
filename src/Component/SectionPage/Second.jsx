import React from "react";
import left from "../../assets/left.webp";
import right from "../../assets/right.webp";
import headingImg from "../../assets/heading.webp";
import brandsImg from "../../assets/brands.webp";

function Second() {
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
                Considered to be the epitome of Modern Photography and
                Filmmaking, HOTC has transformed the Indian Wedding landscape on
                a regular basis. For almost a decade House On The Clouds has
                been creating photographs and films which are timeless and have
                been etched in memories of thousands of people forever.
              </p>

              <p
                className="text-[15px] leading-7 w-[510px] whitespace-pre-wrap mt-6 translate-y-40"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Awarded as the Wedding Filmmaker of the year for four
                consecutive years at the Weddingsutra awards along with numerous
                other awards HOTC is the only company listed on IMDB for its
                award winning films.
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
