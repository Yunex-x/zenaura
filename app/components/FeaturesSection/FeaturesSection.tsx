import React, { JSX } from "react";
import ExplodedView from "./ExplodedView";
import FeatureStat from "./FeatureStat";

const ICON_1 = (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9998 7.99922C26.9998 7.07891 26.2544 6.33231 25.3342 6.33203C24.4137 6.33203 23.667 7.07873 23.667 7.99922C23.6673 8.91946 24.4138 9.66484 25.3342 9.66484C26.2543 9.66456 26.9995 8.919" fill="white"/>
<path d="M10.9998 18.6648C11.0001 16.2462 12.7179 14.2282 14.9998 13.7648V10.393C10.8694 10.8873 7.66725 14.4014 7.66699 18.6648C7.66699 23.267 11.3977 26.9989 15.9998 26.9992C20.2638 26.9992 23.77" fill="white"/>
</svg>
);

const ICON_2 = (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3327 16.0013C28.3327 9.19359 22.8071 3.66797 15.9993 3.66797C9.19163 3.66797 3.66602 9.19359 3.66602 16.0013C3.66602 22.809 9.19163 28.3346 15.9993 28.3346C22.8071 28.3346 28.3327 22." fill="white"/>
<path d="M14.5059 15.4818V10.0156C14.5059 9.46334 14.9536 9.01562 15.5059 9.01562C16.0581 9.01562 16.5059 9.46334 16.5059 10.0156V15.4818C16.5059 15.6865 16.5846 15.9843 16.7585 16.2891C16.8887 16" fill="white"/>
</svg>
);

const ICON_3 = (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6673 12.8021C25.6672 10.2344 25.1479 8.69669 24.2272 7.77604C23.3066 6.8554 21.7689 6.33601 19.2012 6.33594H12.8001C10.2324 6.33601 8.69474 6.8554 7.77409 7.77604C6.85344 8.69669 6.33" fill="white"/>
<path d="M21.6673 14.0026C21.6673 12.4346 21.3477 11.597 20.877 11.1263C20.4062 10.6556 19.5687 10.3359 18.0007 10.3359H14.0007C12.4326 10.3359 11.5951 10.6556 11.1243 11.1263C10.6536 11.597 10.33" fill="white"/>
</svg>
);

const ICON_4 = (
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.3337 13.332C28.3337 12.1528 28.0396 11.452 27.6266 11.0391C27.2136 10.6261 26.5128 10.332 25.3337 10.332H6.66699C5.4878 10.332 4.78701 10.6261 4.37402 11.0391C3.96104 11.452 3.66699 1" fill="white"/>
<path d="M23 15.9987V9.33203C23 8.77975 23.4477 8.33203 24 8.33203C24.5523 8.33203 25 8.77975 25 9.33203V15.9987C25 16.551 24.5523 16.9987 24 16.9987C23.4477 16.9987 23 16.551 23 15.9987Z" fill="white"/>
</svg>
);

export default function FeaturesSection(): JSX.Element {
  return (
    <section className="relative w-screen max-w-full bg-[#0D0D0D] overflow-hidden">
      {/* Decorative blur */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "20vw",
          maxWidth: 280,
          height: "55vw",
          maxHeight: 848,
          left: "-15%",
          top: "35%",
          background: "rgba(170,106,255,0.17)",
          filter: "blur(150px)",
          transform: "matrix(-0.45, -0.89, -0.89, 0.45, 0, 0)",
        }}
        aria-hidden
      />

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px] xl:pt-[200px] pb-12 sm:pb-16 md:pb-20 lg:pb-[120px]">

        {/* Title */}
        <h2
          className="font-montserrat font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80"
          style={{
            fontSize: "clamp(24px, 4.5vw, 64px)",
            lineHeight: "1.35",
          }}
        >
          A Decades of Scientific Research
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          & Precision Engineering
        </h2>

        {/* Gap */}
        <div className="h-10 sm:h-14 md:h-20 lg:h-[100px] xl:h-[160px]" />

        {/* ===== MOBILE / TABLET (< lg): image on top, 2×2 stats grid below ===== */}
        <div className="lg:hidden">
          {/* Exploded image centered */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
            <ExplodedView />
          </div>

          {/* Stats in a 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <FeatureStat
              iconSvg={ICON_1}
              connectorSvg={null}
              title={<span>14 million+ ZENAURA</span>}
              subtitle="Trusted worldwide for hearing protection and well-being."
            />
            <FeatureStat
              iconSvg={ICON_2}
              connectorSvg={null}
              title={<span>40+ industry-leading engineers</span>}
              subtitle="Driving innovation in sound and design."
            />
            <FeatureStat
              iconSvg={ICON_3}
              connectorSvg={null}
              title={<span>30,000+ hours of testing</span>}
              subtitle="Proven in practice, with real people in real scenarios."
            />
            <FeatureStat
              iconSvg={ICON_4}
              connectorSvg={null}
              title={<span>6,000+ acoustic measurements</span>}
              subtitle="Perfected for intelligent, reliable noise reduction."
            />
          </div>
        </div>

        {/* ===== DESKTOP (lg+): 3-column layout ===== */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_minmax(300px,748px)_1fr] items-start gap-4 xl:gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-20 xl:gap-[164px]">
            <FeatureStat
              iconSvg={ICON_1}
              connectorSvg={null}
              title={<span>14 million+ ZENAURA</span>}
              subtitle="Trusted worldwide for hearing protection and well-being."
            />
            <FeatureStat
              iconSvg={ICON_3}
              connectorSvg={null}
              title={<span>30,000+ hours of testing</span>}
              subtitle="Proven in practice, with real people in real scenarios."
            />
          </div>

          {/* Center — exploded artwork */}
          <div className="flex items-center justify-center">
            <ExplodedView />
          </div>

          {/* Right column */}
          <div className="flex flex-col items-end gap-20 xl:gap-[164px]">
            <FeatureStat
              iconSvg={ICON_2}
              connectorSvg={null}
              align="right"
              title={<span>40+ industry-leading engineers</span>}
              subtitle="Driving innovation in sound and design."
            />
            <FeatureStat
              iconSvg={ICON_4}
              connectorSvg={null}
              align="right"
              title={<span>6,000+ acoustic measurements</span>}
              subtitle="Perfected for intelligent, reliable noise reduction."
            />
          </div>
        </div>
      </div>

      {/* Guideline lines — desktop only, percentage-based positioning */}
      <div className="hidden xl:block">
        <div className="absolute left-[14%] top-[42%] w-[35%] h-[1px] border-t border-white/10" />
        <div className="absolute right-[14%] top-[44%] w-[26%] h-[1px] border-t border-white/10" />
        <div className="absolute left-[14%] top-[72%] w-[26%] h-[1px] border-t border-white/10" />
        <div className="absolute right-[14%] top-[67%] w-[26%] h-[1px] border-t border-white/10" />
      </div>
    </section>
  );
}