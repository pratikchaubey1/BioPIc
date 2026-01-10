import React, { useState } from "react";

import one from "../../assets/one.webp";
import two from "../../assets/two.webp";
import three from "../../assets/three.webp";
import four from "../../assets/four.webp";
import five from "../../assets/five.webp";
import six from "../../assets/six.webp";
import seven from "../../assets/seven.webp";
import eight from "../../assets/eight.webp";
import nine from "../../assets/nine.webp";
import ten from "../../assets/ten.webp";
import eleven from "../../assets/eleven.webp";
import thirteen from "../../assets/thirteen.webp";
import fourteen from "../../assets/fourteen.webp";
import fifteen from "../../assets/fifteen.webp";
import sixteen from "../../assets/sixteen.webp";

function Three() {
  const [items] = useState([
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },

    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 8, img: eight },
    { id: 9, img: nine },
    { id: 10, img: ten },

    { id: 11, img: eleven },
    { id: 13, img: thirteen },
    { id: 14, img: fourteen },
    { id: 15, img: fifteen },
    { id: 16, img: sixteen },
  ]);

  return (
    <div className="w-screen bg-[#f6f2e9]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[2px]">

        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-full aspect-square overflow-hidden"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Three;
