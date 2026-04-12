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
  iconSvg?: React.ReactNode; // paste your icon SVG here
  connectorSvg?: React.ReactNode; // paste connector line SVG here
  align?: "left" | "right";
}) {
  return (
    <div className={`relative w-[362px] ${align === "right" ? "text-right" : "text-left"}`}>
      {/* connector placeholder (positioned toward center) */}
      <div
        className={`absolute top-[-36px] ${align === "left" ? "left-[80px]" : "right-[80px]"}`}
        aria-hidden
      >
        {connectorSvg ?? <div className="w-[240px] h-[1px] bg-white/6" />}
      </div>

      {/* icon */}
      <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-white/4">
        <div className="w-[32px] h-[32px]">
          {iconSvg ?? <div className="w-full h-full rounded-sm bg-white/8" />}
        </div>
      </div>

      {/* text */}
      <div className="mt-6">
        <div className="font-montserrat font-semibold text-[32px] leading-[39px] text-white">
          {title}
        </div>
        {subtitle && (
          <div className="mt-3 text-[14px] leading-[20px] text-white/60">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}