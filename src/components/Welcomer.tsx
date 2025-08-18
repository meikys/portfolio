import React from 'react'

import { WelcomerSection } from "@/data/data";

export default function Welcomer() {
  return (
    <section className="container mx-auto flex flex-col justify-start items-start gap-[32px] min-h-[25vh] px-10 lg:px-0 py-[64px] bg-[var(--bg-primary)]" id="#welcomer">
        <div className="flex items-center gap-[8px]">
            <h2 className="text-[2rem] tracking-[-2%] leading-[110%] font-bold">{WelcomerSection.title}</h2>
            <hr className="w-[20px]"/>
        </div>
        <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
         {WelcomerSection.description}
        </p>
    </section>
  )
}
