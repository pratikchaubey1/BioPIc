import React from "react";
import BackGround from "../../assets/BackGround.webp";

function Herosection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* IMAGE */}
      <img
        src={BackGround}
        alt="Hero"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[50%_30%]
          grayscale
          z-0
        "
      />

      {/* DARK OVERLAY */}


      {/* VIGNETTE */}


      {/* FILM GRAIN */}
      <div className="absolute inset-0 noise opacity-20 pointer-events-none z-30" />



    </section>
  );
}

export default Herosection;