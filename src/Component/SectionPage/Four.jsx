import React, { useState } from "react";

import one from "../../assets/onec.webp";
import two from "../../assets/twoc.webp";
import three from "../../assets/threec.webp";
import four from "../../assets/fourc.webp";

function Four() {
  const [items] = useState([
    { id: 1, img: one, name: "Reva & Zach", date: "Oct 7, 2024" },
    { id: 2, img: two, name: "", date: "Aug 25, 2024" },
    {
      id: 3,
      img: three,
      name: "Alia & Ranbir, Mumbai",
      date: "Aug 8, 2024",
    },
    {
      id: 4,
      img: four,
      name: "Kiara & Siddharth",
      date: "Apr 24, 2024",
    },
  ]);

  return (
    <section className="bg-[#f3eee6] py-20">
      <div className="max-w-8xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {items.map((item) => (
            <div key={item.id} className="space-y-2">
              {/* Image */}
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-sm text-gray-700">
                {item.name && (
                  <p className="font-mono leading-tight">{item.name}</p>
                )}
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#b9a063] hover:opacity-90 text-white px-6 py-3 text-sm tracking-wide rounded-md">
            Photography Blog
          </button>
        </div>
      </div>
    </section>
  );
}

export default Four;
