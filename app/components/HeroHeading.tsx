import React, { JSX } from "react";

/**
 * HeroHeading
 * - Matches the spec for "Sound That Moves With You."
 * - Uses the `font-montserrat` utility (ensure Montserrat is loaded via next/font in RootLayout)
 * - Gradient text uses inline background to preserve the exact color stops/angle you provided
 * - Responsive: scales down on small screens but keeps the large design size on wide viewports
 */
export default function HeroHeading(): JSX.Element {
  return (
    <h1
      aria-level={1}
      className="absolute left-1/2 -translate-x-1/2 text-center font-montserrat font-extrabold uppercase w-[90%] max-w-[1280px] px-4"
      style={{
        top: 218,
        // Desktop design size
        fontSize: 120,
        lineHeight: "120px",
        letterSpacing: "-0.03em",
        // Exact gradient from the spec (preserve angle and stops)
        background: "linear-gradient(93.31deg, #FFFFFF 40.77%, #98979C 83.66%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
        // Make it responsive via clamp fallback (nice scaling on medium screens)
        // Note: the inline fontSize above will be used on large screens, but clamp helps smaller viewports
        fontSize: "clamp(44px, 6.5vw, 120px)",
      }}
    >
      Sound That Moves With You.
    </h1>
  );
}