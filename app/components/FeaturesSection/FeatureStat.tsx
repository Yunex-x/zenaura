import React from "react";

export default function FeatureStat({
  title,
  subtitle,
  iconSvg,
  connectorSvg,
  align = "left",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  iconSvg?: React.ReactNode;
  connectorSvg?: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className={`relative w-full max-w-[362px] ${align === "right" ? "text-right ml-auto" : "text-left"}`}>
      {/* Connector placeholder — desktop only */}
      <div
        className={`hidden lg:block absolute top-[-36px] ${align === "left" ? "left-[80px]" : "right-[80px]"}`}
        aria-hidden
      >
        {connectorSvg ?? <div className="w-[140px] xl:w-[240px] h-[1px] bg-white/6" />}
      </div>

      {/* Icon */}
      <div
        className={`
          w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] lg:w-[64px] lg:h-[64px]
          rounded-full flex items-center justify-center bg-white/4
          ${align === "right" ? "ml-auto" : ""}
        `}
      >
        <div className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] lg:w-[32px] lg:h-[32px]">
          {iconSvg ?? <div className="w-full h-full rounded-sm bg-white/8" />}
        </div>
      </div>

      {/* Text */}
      <div className="mt-3 sm:mt-4 lg:mt-6">
        <div
          className="font-montserrat font-semibold text-white"
          style={{
            fontSize: "clamp(18px, 2.2vw, 32px)",
            lineHeight: "1.25",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className="mt-1.5 sm:mt-2 lg:mt-3 text-white/60"
            style={{
              fontSize: "clamp(12px, 1.1vw, 14px)",
              lineHeight: "1.45",
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}