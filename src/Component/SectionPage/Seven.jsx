import React from "react";
import one from "../../assets/onee.webp";
import two from "../../assets/twoe.webp";
import three from "../../assets/threee.webp";
import four from "../../assets/foure.webp";

function Seven() {
  const items = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
  ];

  return (
    <section className="bg-[#f3eee6] py-20">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -translate-y-55">

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
    </section>
  );
}

export default Seven;
