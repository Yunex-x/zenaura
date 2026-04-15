import React, { JSX } from "react";

export default function HeroHeading(): JSX.Element {
  return (
    <h1
      aria-level={1}
      className="
        absolute left-1/2 -translate-x-1/2 text-center
        font-montserrat font-extrabold uppercase
        w-[92%] max-w-[1280px] px-3 sm:px-4
        top-[100px] sm:top-[140px] md:top-[170px] lg:top-[218px]
        text-[clamp(32px,8vw,120px)] leading-[1.05]
        tracking-[0.03em]
      "
      style={{
        background: "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Sound That Moves With You.
    </h1>
  );
}