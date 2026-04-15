import React from "react";

export default function FeatureStat({
  title,
  subtitle,
  iconSvg,
  align = "left",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  iconSvg?: React.ReactNode;
  connectorSvg?: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`relative w-full max-w-[362px] ${
        align === "right" ? "text-right ml-auto" : "text-left"
      }`}
    >
      {/* ── Icon circle ──
          Figma: 64×64, bg rgba(255,255,255,0.04), border-radius 200px */}
      <div
        className={`
          w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[64px] lg:h-[64px]
          rounded-full flex items-center justify-center
          bg-white/[0.04]
          border border-white/[0.06]
          ${align === "right" ? "ml-auto" : ""}
        `}
      >
        <div
          className="
            w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px]
            flex items-center justify-center
            [&>svg]:w-full [&>svg]:h-full
          "
        >
          {iconSvg ?? <div className="w-full h-full rounded-sm bg-white/8" />}
        </div>
      </div>

      {/* ── Text block ── */}
      <div className="mt-3 sm:mt-4 lg:mt-5">
        {/* Title — Figma: Montserrat 600, 32px, tracking -0.03em */}
        <div
          className="font-montserrat font-semibold text-white tracking-[0.03em]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 32px)",
            lineHeight: "1.22",
          }}
        >
          {title}
        </div>

        {/* Subtitle — Figma: Montserrat 400, 14px, tracking -0.01em, white/60 */}
        {subtitle && (
          <div
            className="mt-2 sm:mt-2.5 lg:mt-3 font-montserrat font-normal text-white/60 tracking-[0.01em]"
            style={{
              fontSize: "clamp(12px, 1.1vw, 14px)",
              lineHeight: "1.43",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}