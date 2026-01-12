import React from "react";
import girl from "../../assets/girl.gif";
import kid from "../../assets/kid.gif";

function Six() {
  const items = [
    {
      id: 1,
      video: girl,
      name: "Love In Second Innings.",
      desc: "Second marriage, for many, is still a taboo. And this story illustrates why it’s not. It’s a treatise on how the past doesn’t come in the way of love and respect. It’s a heroic tale of victory over stereotypes and archaic customs. It’s a story of how love always triumphs in the end. Every moment that we spent with Deepal and Nishant convinced us that life can be made beautiful… that tears can be turned into a drizzle of hope; that fear can be turned into the excitement of exploring the unknown; that the end is but a new beginning.",
    },
    {
      id: 2,
      video: kid,
      name: "Twenty Years in the Making",
      desc: "This one is special, very special. Hiba and Akbar's story took us on a journey all the way from Hiba's childhood till their reception in Bhopal and on the way we discovered an all new perspective of filming a wedding. We knew from start that no matter how hard we try we can never justify this wedding in a 5 minute film, but we tried, tried for an year now and this is the best we could do. Its a film which is not just about a wedding, an India Pakistan story which is not about India or Pakistan. For us its much more than that.",
    },
  ];

  return (
    <section className="bg-[#f3eee6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 px-50">
        {items.map((item) => (
          <div key={item.id} className="space-y-3">
            {/* VIDEO CARD */}
            <div className="relative w-full aspect-video overflow-hidden bg-black -translate-y-30">
              <img
                src={item.video}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14  rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h2
                className="text-xl mb-2 -translate-y-30"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.name}
              </h2>

              <p
                className="text-sm leading-relaxed text-gray-700 -translate-y-30"
                 style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON + PARAGRAPH (CENTERED) */}
      <div className="mt-24 flex flex-col items-center text-center gap-10 px-40 -translate-y-40">
        <button className="bg-[#b9a063] hover:opacity-90 text-white px-6 py-3 text-sm tracking-wide rounded-md">
          Watch All Our Winning Films
        </button>

        <p className="max-w-4xl text-sm  w-[780px] leading-relaxed text-gray-700"  
        style={{ fontFamily: "'Libre Baskerville', serif" }}>
          We at HOTC celebrate the wild ones, the rule breakers, the travellers,
          the new age modern couple who are not afraid to experiment. We believe
          the ultimate goal of a wedding photographer is to justify the vibe of
          the wedding and the personalities of the couple. And this approach has
          helped us experience weddings in a two bedroom apartments to weddings
          spread over 2 continents.
          <br />
          <br />
          Here are some selected weddings from past couple of years to showcase
          the union of two people in the most authentic way possible.
        </p>
      </div>
    </section>
  );
}

export default Six;
