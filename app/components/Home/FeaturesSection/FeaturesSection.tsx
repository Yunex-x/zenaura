import React, { JSX } from "react";
import ExplodedView from "./ExplodedView";
import FeatureStat from "./FeatureStat";

/* ─────────────────────────────────────────────
   Vuesax-style icons — matched to screenshot
   ───────────────────────────────────────────── */

/* Top-left: link / chain icon (14 million+ ZENAURA) */
const ICON_LINK = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.333 14.667a6.667 6.667 0 0 1 0 9.428l-2.828 2.828a6.667 6.667 0 1 1-9.429-9.428l1.572-1.572"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.667 17.333a6.667 6.667 0 0 1 0-9.428l2.828-2.828a6.667 6.667 0 1 1 9.429 9.428l-1.572 1.572"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Top-right: gear / cpu settings icon (40+ industry-leading engineers) */
const ICON_GEAR = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer rounded square */}
    <rect
      x="6.333"
      y="6.333"
      width="19.333"
      height="19.333"
      rx="4"
      stroke="white"
      strokeWidth="1.5"
    />
    {/* Inner circle (gear) */}
    <circle cx="16" cy="16" r="4.333" stroke="white" strokeWidth="1.5" />
    {/* Center dot */}
    <circle cx="16" cy="16" r="1.5" fill="white" />
    {/* Top pins */}
    <path d="M12 3.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 3.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 3.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bottom pins */}
    <path d="M12 25.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 25.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 25.667v2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Left pins */}
    <path d="M3.667 12h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3.667 16h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3.667 20h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    {/* Right pins */}
    <path d="M25.667 12h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25.667 16h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M25.667 20h2.666" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* Bottom-left: clock icon (30,000+ hours of testing) */
const ICON_CLOCK = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12.333" stroke="white" strokeWidth="1.5" />
    <path d="M16 10v6l4 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Bottom-right: ruler / measurement icon (6,000+ acoustic measurements) */
const ICON_RULER = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.667" y="10.333" width="26.667" height="11.333" rx="3" stroke="white" strokeWidth="1.5" />
    <path d="M8 10.333v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 10.333v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 10.333v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M23 10.333v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="relative w-screen max-w-full bg-[#0D0D0D] overflow-hidden">

      {/* ── Decorative blur ellipse (Figma: Ellipse 3) ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 848,
          left: "-18.8%",
          top: "33.7%",
          background: "rgba(170,106,255,0.17)",
          filter: "blur(150px)",
          transform: "matrix(-0.45, -0.89, -0.89, 0.45, 0, 0)",
        }}
        aria-hidden
      />

      {/* ── Content wrapper ── */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] xl:pt-[200px] pb-12 sm:pb-16 md:pb-20 lg:pb-[120px]">

        {/* ── Title ── */}
        <h2
          className="font-montserrat font-bold bg-clip-text text-transparent"
          style={{
            fontSize: "clamp(24px, 4.5vw, 64px)",
            lineHeight: "1.36",
            letterSpacing: "-0.02em",
            backgroundImage:
              "linear-gradient(90deg, #FFFFFF 63.39%, rgba(62,62,62,0.21) 143.55%)",
          }}
        >
          A Decades of Scientific Research
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          &amp; Precision Engineering
        </h2>

        {/* Gap */}
        <div className="h-10 sm:h-14 md:h-20 lg:h-[100px] xl:h-[160px]" />

        {/* ═══ MOBILE / TABLET (< lg): stacked ═══ */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <ExplodedView />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <FeatureStat
              iconSvg={ICON_LINK}
              title={<span>14 million+ ZENAURA</span>}
              subtitle="Trusted worldwide for hearing protection and well-being."
            />
            <FeatureStat
              iconSvg={ICON_CLOCK}
              title={<span>40+ industry-leading engineers</span>}
              subtitle="Driving innovation in sound and design."
            />
            <FeatureStat
              iconSvg={ICON_GEAR}
              title={<span>30,000+ hours of testing</span>}
              subtitle="Proven in practice, with real people in real scenarios."
            />
            <FeatureStat
              iconSvg={ICON_RULER}
              title={<span>6,000+ acoustic measurements</span>}
              subtitle="Perfected for intelligent, reliable noise reduction."
            />
          </div>
        </div>

        {/* ═══ DESKTOP (lg+): positioned layout with connector SVGs ═══ */}
        <div className="hidden lg:block relative" style={{ height: "clamp(550px, 54vw, 748px)" }}>

          {/* ── Center image ── */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full flex justify-center" style={{ height: "100%" }}>
            <ExplodedView />
          </div>

          {/* ════════════════════════════════════════════
              CONNECTOR LINES — SVG paths on a full overlay
              Positioned absolutely over the entire layout
              ════════════════════════════════════════════ */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1520 748"
            fill="none"
            aria-hidden
          >
            {/* Vector 5 — Top-left connector:
                From icon area (x~64) horizontal right, then curves down toward center image.
                Figma: 684×39 at offset (64, 72) relative to Group 51 */}
            <path
              d="M64 72 H580 Q648 72 648 111"
              stroke="rgba(255,255,255,0.11)"
              strokeWidth="1"
              fill="none"
            />

            {/* Vector 6 — Bottom-left connector:
                Horizontal line from icon area to center image.
                Figma: 504×0 at offset (69, 494) */}
            <path
              d="M69 494 H573"
              stroke="rgba(255,255,255,0.11)"
              strokeWidth="1"
              fill="none"
            />

            {/* Vector 8 — Top-right connector:
                From center image right edge, horizontal then curves up to right icon.
                Figma: 511×48 at offset (944, 111), flipped */}
            <path
              d="M944 159 Q944 111 1000 111 H1456"
              stroke="rgba(255,255,255,0.11)"
              strokeWidth="1"
              fill="none"
            />

            {/* Vector 7 — Bottom-right connector:
                From center image right edge, horizontal line, step down, then horizontal to right icon.
                Figma: 513×66 at offset (944, 417), flipped */}
            <path
              d="M944 417 H1080 Q1100 417 1100 450 L1100 465 Q1100 483 1120 483 H1456"
              stroke="rgba(255,255,255,0.11)"
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* ── Stat: Top-Left (14 million+) ── */}
          <div className="absolute left-0 top-[5%] xl:top-[10%]" style={{ width: "clamp(260px, 24vw, 362px)" }}>
            <FeatureStat
              iconSvg={ICON_LINK}
              title={<span>14 million+ ZENAURA</span>}
              subtitle="Trusted worldwide for hearing protection and well-being."
            />
          </div>

          {/* ── Stat: Bottom-Left (30,000+ hours) ── */}
          <div className="absolute left-0 bottom-[5%] xl:bottom-[0%]" style={{ width: "clamp(260px, 24vw, 362px)" }}>
            <FeatureStat
              iconSvg={ICON_GEAR}
              title={<span>30,000+ hours of testing</span>}
              subtitle="Proven in practice, with real people in real scenarios."
            />
          </div>

          {/* ── Stat: Top-Right (40+ engineers) ── */}
          <div className="absolute right-0 top-[5%] xl:top-[10%]" style={{ width: "clamp(260px, 24vw, 362px)" }}>
            <FeatureStat
              iconSvg={ICON_CLOCK}
              align="right"
              title={<span>40+ industry-leading engineers</span>}
              subtitle="Driving innovation in sound and design."
            />
          </div>

          {/* ── Stat: Bottom-Right (6,000+ acoustic) ── */}
          <div className="absolute right-0 bottom-[5%] xl:bottom-[0%]" style={{ width: "clamp(260px, 24vw, 362px)" }}>
            <FeatureStat
              iconSvg={ICON_RULER}
              align="right"
              title={<span>6,000+ acoustic measurements</span>}
              subtitle="Perfected for intelligent, reliable noise reduction."
            />
          </div>

        </div>
      </div>
    </section>
  );
}