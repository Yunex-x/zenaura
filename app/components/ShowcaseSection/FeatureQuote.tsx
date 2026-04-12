import React from "react";

export default function FeatureQuote({
  quote,
  cta,
}: {
  quote: string;
  cta?: string;
}) {
  return (
    <div className="max-w-[335.73px]">
      <div className="font-poppins font-medium text-[22px] leading-[33px] text-white/80 -tracking-[1px]">
        {quote}
      </div>
      {cta && (
        <div className="mt-4">
          <button className="text-white underline font-poppins font-medium text-sm">
            {cta}
          </button>
        </div>
      )}
    </div>
  );
}