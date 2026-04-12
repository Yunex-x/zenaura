import React from "react";
import Image from "next/image";

export default function PosterCard({
  item,
  active,
}: {
  item: { image: string; tag?: string; quote?: string; cta?: string };
  active?: boolean;
}) {
  return (
    <div
      className={`relative h-full w-full rounded-sm overflow-hidden bg-[#0B0B0B] ${active ? "shadow-[0_30px_60px_rgba(0,0,0,0.6)]" : ""}`}
    >
      {/* Poster image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.tag ?? ""}
          fill
          sizes="(min-width: 1280px) 428px, (min-width: 768px) 360px, 300px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* tag pill top-left */}
      <div className="absolute left-4 top-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-[12px] text-white/80 font-medium">
          {item.tag}
        </span>
      </div>

      {/* translucent centered play button */}
      <button
        aria-label="Play testimonial"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-black/40 border border-white/10 flex items-center justify-center backdrop-blur-sm"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 5v14l11-7-11-7z" fill="white" />
          </svg>
        </div>
      </button>

      {/* bottom quote + CTA */}
      <div className="absolute left-6 right-6 bottom-6 text-left">
        <p className="text-[20px] leading-[28px] text-white/90 font-medium mb-3">
          {item.quote}
        </p>
        <button className="text-sm text-white underline font-medium">{item.cta}</button>
      </div>
    </div>
  );
}