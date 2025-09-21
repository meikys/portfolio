import React from "react";
import { RiStarSFill, RiStarSLine, RiStarHalfSFill } from "react-icons/ri";

interface StarsProps {
  rating: number;
}

export default function Stars({ rating }: StarsProps) {
  return (
    <div className="flex justify-center gap-[8px]">
      {Array.from({ length: 5 }).map((_, i) => {
        const starValue = i + 1;
        if (rating >= starValue) {
          return <RiStarSFill key={i} className="text-[#ffcc00] w-4 h-4 lg:w-7 lg:h-7" />;
        } else if (rating >= starValue - 0.5) {
          return <RiStarHalfSFill key={i} className="text-[#ffcc00] w-4 h-4 lg:w-7 lg:h-7" />;
        } else {
          return <RiStarSLine key={i} className="text-[#3e3e3e] w-4 h-4 lg:w-7 lg:h-7" />;
        }
      })}
    </div>
  );
}
