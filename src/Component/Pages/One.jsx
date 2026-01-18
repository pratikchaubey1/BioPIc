import React from "react";
import video from "../../assets/videoone.mp4";

function One() {
  return (
    <section className="w-full h-[75vh] bg-black overflow-hidden relative">

      {/* VIDEO */}
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

      {/* TEXT */}
      <div className="relative z-20 h-full flex items-end px-12 pb-16">
        <p
          className="text-5xl md:text-5xl text-white italic -translate-y-50 translate-x-10"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Inspired by Cinema.
        </p>
      </div>

    </section>
  );
}

export default One;
