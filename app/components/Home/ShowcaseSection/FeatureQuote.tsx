import React from "react";

export default function FeatureQuote({
  quote,
  cta,
}: {
  quote: string;
  cta?: string;
}) {
  return (
    <div className="max-w-full sm:max-w-[335px]">
      <div
        className="font-poppins font-medium text-white/80 tracking-[0.5px] sm:-tracking-[1px]"
        style={{
          fontSize: "clamp(16px, 1.8vw, 22px)",
          lineHeight: "1.5",
        }}
      >
        {quote}
      </div>
      {cta && (
        <div className="mt-3 sm:mt-4">
          <button className="text-white underline font-poppins font-medium text-sm">
            {cta}
          </button>
        </div>
      )}
    </div>
  );
}