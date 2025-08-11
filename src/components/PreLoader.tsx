"use client";

import React, { useEffect } from "react";
import { PreloaderAnim } from "@/animations/PreloaderAnim";

import { PreloaderText } from "@/data/data";

interface PreLoaderProps {
  onComplete?: () => void;  // teraz je voliteľné
}

export default function PreLoader({ onComplete }: PreLoaderProps) {
  useEffect(() => {
    if (onComplete) {
      PreloaderAnim(onComplete);
    } else {
      PreloaderAnim(() => {});
    }
  }, [onComplete]);

  return (
    <>
      <div className="preloader fixed inset-0 z-50 bg-black flex items-center justify-center flex-col pointer-events-none pt-safe pb-safe md:pt-0 md:pb-0">
        <div className="intro-title opacity-0 ">
          <h1 className="text-white text-[2rem] tracking-[-2%] font-bold ">{PreloaderText.brandName}</h1>
        </div>
        <div className="outro-title opacity-0">
          <h1 className="text-white text-[2rem] tracking-[-2%] font-bold ">{PreloaderText.number}</h1>
        </div>
      </div>

      <div className="split-overlay fixed inset-0 z-40 bg-black flex items-center justify-center flex-col opacity-0 pointer-events-none">
        <div className="intro-title">
          <h1 className="text-white text-[2rem] tracking-[-2%] font-bold ">{PreloaderText.brandName}</h1>
        </div>
        <div className="outro-title">
          <h1 className="text-white text-[2rem] tracking-[-2%] font-bold ">{PreloaderText.number}</h1>
        </div>
      </div>
    </>
  );
}
