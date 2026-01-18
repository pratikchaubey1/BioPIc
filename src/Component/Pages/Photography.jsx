import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/Context";

function Photography() {
  const { photo } = useUser();
  const [filter, setFilter] = useState("All");

  // FILTER LOGIC (CONNECTED TO DATA)
  const filteredPhoto =
    filter === "All"
      ? photo
      : photo.filter(
          (item) =>
            item.contry &&
            item.contry.toLowerCase() === filter.toLowerCase()
        );

  return (
    <section className="bg-[#f3efe6] py-16">
      <div className="max-w-[1200px] mx-auto px-6 mt-29">

        {/* White Container */}
        <div className="bg-white rounded-[32px] px-6 md:px-10 py-14">

          {/* Select Section (NO border, NO box) */}
          <div
            className="text-center mb-16 text-sm text-[#2b2b2b]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span>Select:</span>

            <button
              onClick={() => setFilter("All")}
              className={`ml-2 ${
                filter === "All" ? "underline" : "opacity-70"
              }`}
            >
              All
            </button>

            <span className="mx-2">|</span>

            <button
              onClick={() => setFilter("International")}
              className={`${
                filter === "International" ? "underline" : "opacity-70"
              }`}
            >
              International
            </button>

            <span className="mx-2">|</span>

            <button
              onClick={() => setFilter("Indian")}
              className={`${
                filter === "Indian" ? "underline" : "opacity-70"
              }`}
            >
              Indian
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredPhoto.map((item, index) => (
              <div key={index}>

                {/* Image (NO hover effect) */}
                <Link to={`/photography/${index}`}>
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div
                  className="mt-5 text-[#2b2b2b]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <h2 className="text-base font-medium mb-2">
                    {item.name}
                  </h2>

                  <p className="text-sm leading-relaxed mb-3 line-clamp-5 opacity-80">
                    {item.des}
                  </p>

                  <Link
                    to={`/photography/${index}`}
                    className="text-sm hover:underline"
                  >
                    Read More →
                  </Link>

                  <p className="text-xs tracking-wide uppercase mt-3 opacity-70">
                    {item.contry}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Photography;
