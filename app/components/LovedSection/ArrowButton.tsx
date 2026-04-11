import React from "react";

export function ArrowOutline({ onClick, children }: { onClick?: () => void; children?: React.ReactNode; }) {
  return (
    <button
      onClick={onClick}
      className="w-[233px] h-[80px] rounded-[89px] border border-white/12 flex items-center justify-center text-white/80 hover:border-white/20 transition"
      aria-label="previous"
    >
      {children}
    </button>
  );
}

export function ArrowSolid({ onClick, children }: { onClick?: () => void; children?: React.ReactNode; }) {
  return (
    <button
      onClick={onClick}
      className="w-[233px] h-[80px] rounded-[89px] bg-white flex items-center justify-center shadow-lg"
      aria-label="next"
    >
      {children}
    </button>
  );
}