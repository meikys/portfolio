import React from "react";

import Button from "@/components/ui/Button";

export default function Reviews() {
  return (
    <section className="bg-[var(--bg-primary)]">
      <div className="container mx-auto flex flex-col justify-start items-start gap-[32px] px-10 py-[64px]">
        <div className="flex items-center gap-[8px]">
          <h2 className="text-[2rem] tracking-[-2%] leading-[110%] font-bold">
            Travelers Before
          </h2>
          <hr className="w-[20px]" />
        </div>
        <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
          Echoes from past journeys, told by those who walked the path.
        </p>
        <Button variant="primary">Let us set forth together on a journey where every line of code tells its own tale.</Button>
      </div>
    </section>
  );
}
