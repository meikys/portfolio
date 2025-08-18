import React from "react";

import Image from "next/image";

import { projects } from "@/data/data"
import Button from "./ui/Button";

export default function Projects() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-[32px] bg-[var(--bg-secondary)]"
      id="#projects"
    >
      {projects.map(({ id, number, title, description, button, bgColor, imageSrc }) => (
        <div key={id} className="flex flex-col-reverse gap-[32px] w-full min-h-[50vh] py-[64px]">
          <div className="flex gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <hr className="w-[20px]" />
              <span>{number}</span>
            </div>
            <div className="flex flex-col justify-end h-full gap-[8px] mr-10">
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
            className="w-[100%] h-auto relative"
            style={{ perspective: "1000px" }}
          >
            <Image
              src={imageSrc}
              width={800}
              height={800}
              alt={title}
              className="relative top-0 max-w-[100vw] -translate-y-5 z-20 -rotate-y-20 shadow-xl"
            />
            <div className={`absolute bottom-0 w-[300px] h-[230px] ${bgColor} z-10 opacity-50}`} />
          </div>
        </div>
      ))}
    </section>
  );
}
