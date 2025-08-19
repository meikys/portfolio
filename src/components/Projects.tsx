import React from "react";

import Image from "next/image";

import { projects } from "@/data/data"
import Button from "./ui/Button";

export default function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-[32px] lg:gap-0 bg-[var(--bg-secondary)]"
      id="#projects"
    >
      {projects.map(({ id, number, title, description, button, bgColor, imageSrc }) => (
        <div key={id} className="flex flex-col-reverse lg:flex-row lg:justify-between gap-[32px] w-full min-h-[50vh] lg:min-h-[25vh] py-[64px] lg:py-0 group hover:bg-[#FFFFFF] transition ease-in-out duration-500 cursor-pointer">
          <div className="flex gap-[16px] lg:w-[50%]">
            <div className="flex items-center gap-[8px]">
              <hr className="transition-color ease-in-out duration-1000 lg:border-t-[#000000]/10 group-hover:border-t-[#000000]/100 w-[20px] lg:w-[20rem]" />
              <span className="transition-text ease-in-out duration-1000 group-hover:text-[1.5rem]">{number}</span>
            </div>
            <div className="flex flex-col justify-end lg:justify-center h-full lg:h-auto gap-[8px] mr-10 lg:mr-0">
              <h3 className="text-[2rem] tracking-[-1.5%] leading-[130%] font-bold">
                {title}
              </h3>
              <p className="text-[0.9rem] text-[#474747] tracking-[0.5%] leading-[150%]">
                {description}
              </p>
              <Button variant="primary" className="ml-auto">
                {button}
              </Button>
            </div>
          </div>
          <div
            className="w-[100%] lg:w-[50%] h-auto relative"
            style={{ perspective: "1000px" }}
          >
            <Image
              src={imageSrc}
              width={800}
              height={800}
              alt={title}
              className="relative top-0 max-w-[100vw] -translate-y-5 lg:group-hover:translate-x-[90%] lg:translate-x-[100vw] z-20 -rotate-y-20 shadow-xl lg:max-h-[320px] lg:max-w-[640px] ease-in-out duration-500"
            />
            <div className={`absolute bottom-0 w-[300px] lg:w-[700px] h-[230px] lg:h-full lg:group-hover:translate-x-[70%] lg:translate-x-[100vw] lg:translate-y-10 ${bgColor} z-10 opacity-50} ease-in-out duration-500`} />
          </div>
        </div>
      ))}
    </section>
  );
}
