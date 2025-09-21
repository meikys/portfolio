import React from "react";
import Button from "@/components/ui/Button";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { CiCalendar } from "react-icons/ci";

export default function Reviews() {
  return (
    <>
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
          <Button variant="primary">
            Let us set forth together on a journey where every line of code
            tells its own tale.
          </Button>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-[32px] lg:gap-0 bg-[var(--bg-secondary)] px-10 lg:px-0">
        <div className="flex flex-col lg:justify-between items-center text-center gap-[32px] w-full min-h-[50vh] lg:min-h-[25vh] py-[64px] lg:py-0 group hover:bg-[#FFFFFF] transition ease-in-out duration-500 cursor-pointer">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              Valu Bet s.r.o
            </h3>
            <p className="text-[0.9rem] text-[#474747] tracking-[0.5%] leading-[150%]">
              Betting consultancy and sports tipster services
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[0.8rem] text-[#474747]">This project was built with</span>
              <div className="flex gap-[8px] justify-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">HTML</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">CSS</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">JS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black"><CiCalendar className="w-4 h-4"/> 11.9.2025</span>
            <p>
              Working with you was excellent. Communication was very smooth –
              you were able to understand the needs of a client who didn’t even
              know exactly how they wanted their website to look. You took full
              ownership and handled everything really well.
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">Customer feedback</span>
              <div className="flex justify-center gap-[8px]">
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSLine className="text-[#3e3e3e] w-4 h-4"/>
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-[110%] max-h-[5vw] bg-black overflow-hidden">
        <span className="text-white/80 text-[3.5vw] italic font-semibold -ml-[1rem]">.shapeshifting</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">.shapeshifting</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">.shapeshifting</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">.shapeshifting</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">.shapeshifting</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">.shapeshifting</span>
      </div>
      <section className="flex flex-col justify-center items-center gap-[32px] lg:gap-0 bg-[var(--bg-secondary)] px-10 lg:px-0">
        <div className="flex flex-col lg:justify-between items-center text-center gap-[32px] w-full min-h-[50vh] lg:min-h-[25vh] py-[64px] lg:py-0 group hover:bg-[#FFFFFF] transition ease-in-out duration-500 cursor-pointer">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              Valu Bet s.r.o
            </h3>
            <p className="text-[0.9rem] text-[#474747] tracking-[0.5%] leading-[150%]">
              Betting consultancy and sports tipster services
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[0.8rem] text-[#474747]">This project was built with</span>
              <div className="flex gap-[8px] justify-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">HTML</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">CSS</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">JS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black"><CiCalendar className="w-4 h-4"/> 11.9.2025</span>
            <p>
              Working with you was excellent. Communication was very smooth –
              you were able to understand the needs of a client who didn’t even
              know exactly how they wanted their website to look. You took full
              ownership and handled everything really well.
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">Customer feedback</span>
              <div className="flex justify-center gap-[8px]">
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSLine className="text-[#3e3e3e] w-4 h-4"/>
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-[110%] max-h-[5vw] bg-black overflow-hidden">
        <span className="text-white/80 text-[3.5vw] italic font-semibold -ml-[1rem]">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
        <span className="text-white/80 text-[3.5vw] italic font-semibold">creative</span>
      </div>
            <section className="flex flex-col justify-center items-center gap-[32px] lg:gap-0 bg-[var(--bg-secondary)] px-10 lg:px-0">
        <div className="flex flex-col lg:justify-between items-center text-center gap-[32px] w-full min-h-[50vh] lg:min-h-[25vh] py-[64px] lg:py-0 group hover:bg-[#FFFFFF] transition ease-in-out duration-500 cursor-pointer">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
              Valu Bet s.r.o
            </h3>
            <p className="text-[0.9rem] text-[#474747] tracking-[0.5%] leading-[150%]">
              Betting consultancy and sports tipster services
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="text-[0.8rem] text-[#474747]">This project was built with</span>
              <div className="flex gap-[8px] justify-center">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">HTML</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">CSS</span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">JS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black"><CiCalendar className="w-4 h-4"/> 11.9.2025</span>
            <p>
              Working with you was excellent. Communication was very smooth –
              you were able to understand the needs of a client who didn’t even
              know exactly how they wanted their website to look. You took full
              ownership and handled everything really well.
            </p>
            <div className="flex flex-col gap-[16px]">
              <span className="flex mx-auto gap-[8px] px-3 py-1 text-xs font-medium rounded-full bg-[#474747]/20 text-black">Customer feedback</span>
              <div className="flex justify-center gap-[8px]">
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSFill className="text-[#ffcc00] w-4 h-4"/>
              </span>
              <span>
                <RiStarSLine className="text-[#3e3e3e] w-4 h-4"/>
              </span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
