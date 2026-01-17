import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../Context/Context";

function Photography() {
  const { photo } = useUser();
  const [filter, setFilter] = useState("All");

  const filteredPhoto =
    filter === "All"
      ? photo
      : photo.filter((item) =>
          item.contry.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    // Page background
    <div className="bg-[#f3efe6] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* White Container (like image) */}
        <div className="bg-white rounded-[35px] px-5 py-10 translate-y-40">

          {/* Select Filter */}
          <div className="text-center mb-14 text-sm text-[#2b2b2b]">
            Select:
            <button
              onClick={() => setFilter("All")}
              className={`ml-3 ${
                filter === "All" ? "underline" : ""
              }`}
            >
              All
            </button>
            |
            <button
              onClick={() => setFilter("International")}
              className={`ml-3 ${
                filter === "International" ? "underline" : ""
              }`}
            >
              International
            </button>
            |
            <button
              onClick={() => setFilter("Indian")}
              className={`ml-3 ${
                filter === "Indian" ? "underline" : ""
              }`}
            >
              Indian
            </button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredPhoto.map((item, index) => (
              <div key={index} className="group">

                {/* Image */}
                <Link to={`/photography/${index}`}>
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-80 object-cover  transition duration-500"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="mt-4 text-[#2b2b2b]">
                  <h2 className="text-base font-medium mb-2">
                    {item.name}
                  </h2>

                  <p className="text-sm leading-relaxed mb-3 line-clamp-5">
                    {item.des}
                  </p>

                  <Link
                    to={`/photography/${index}`}
                    className="text-sm hover:underline"
                  >
                    Read More →
                  </Link>

                  <p className="text-xs tracking-wide uppercase mt-3">
                    {item.contry}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Photography;
