import React from "react";
import editorialData from "./Data";
import { Link } from "react-router-dom";

function Editorial() {
  return (
    <section className="bg-[#f3efe6] py-12 mt-39">
      <div className="mx-auto max-w-[1700px] px-4">

        {/* Masonry Layout */}
        <div
          className="
            columns-2
            sm:columns-3
            md:columns-4
            lg:columns-6
            gap-[6px]
          "
        >
          {editorialData.map((item) => (
            <Link
              key={item.id}
              to={`/editorial/${item.id}`}
              className="mb-[6px] block break-inside-avoid"
            >
              <img
                src={item.img}
                alt={`Editorial ${item.id}`}
                className="w-full h-auto object-cover"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Editorial;
