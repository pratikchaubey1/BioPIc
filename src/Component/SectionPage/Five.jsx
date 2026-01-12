import React from "react";
import video from "../../assets/videomid.mp4";
import aword from "../../assets/aword.webp";

function Five() {
  return (
    <section className="w-screen bg-[#f3eee6] overflow-hidden">

      {/* ================= VIDEO SECTION ================= */}
      <div className="relative h-[80vh] w-full overflow-hidden">

        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          className="absolute inset-0 bg-black/40"
          style={{
            clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
          }}
        />

        {/* CENTER TEXT */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1
              className="text-4xl md:text-6xl mb-6 tracking-[0.3em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              SOUL+CINEMA
            </h1>

            <p
              className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed opacity-80"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Every wedding is unique and so are our films. For past 8 years HOTC
              has set new benchmarks of storytelling within wedding realm and
              beyond. We are fortunate to have experienced so unique cultures and
              traditions across 25 countries and to document stories that
              continuously overwhelm us.
            </p>
          </div>
        </div>

      </div>

      {/* ================= AWARD SECTION ================= */}
      <div className="py-24 flex flex-col items-center justify-center text-center">

        <h1
          className="text-xl md:text-3xl mb-2 tracking-[0.2em]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          AWARD WINNING FILMS
        </h1>

        <img
          src={aword}
          alt="Award"
          className="mx-auto max-w-xs md:max-w-5xl"
        />

      </div>

    </section>
  );
}

export default Five;
