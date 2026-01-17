import React from "react";
import one from "../../assets/mone.webp";
import two from "../../assets/mtwo.webp";
import three from "../../assets/mthree.webp";
import four from "../../assets/mfour.webp";
import five from "../../assets/mfive.webp";
import six from "../../assets/msix.webp";
import seven from "../../assets/mseven.webp";
import tone from "../../assets/tone.webp";
import ttwo from "../../assets/ttwo.webp";
import banner from '../../assets/banner.png'
import headline from '../../assets/headline.webp'


function Eight() {
  const item = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
  ];
  const items = [
    { id: 1, img: tone },
    { id: 2, img: ttwo },
  ];

  return (
    <div className=" bg-[#f3eee6] py-12">
      <div className="w-full -translate-y-50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-8 -translate-y-30">
          {item.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt=""
              className="w-[110px] h-auto object-contain"
            />
          ))}
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -translate-y-70">
          {items.map((item) => (
            <div key={item.id} className="relative overflow-hidden group ">
              {/* IMAGE */}
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20" />
              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16  flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[14px] border-l-white border-t-[11px] border-t-transparent border-b-[9px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Eight;
