"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { SocialLinks, HeroText } from "@/data/data";

import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      className="bg-[var(--bg-secondary)] px-10 max-h-screen"
      id="hero"
    >
      <div className="absolute top-1/2 left-1/2 lg:shadow-none w-[80vw] max-w-[700px] aspect-square bg-[var(--bg-primary)] rounded-full transform -translate-x-1/2 -translate-y-1/2 -z-0"></div>
      <div className="container mx-auto flex flex-col lg:flex-row lg:flex-wrap justify-start items-center gap-[32px] pb-safe-bottom pb-safe-top lg:pb-0 min-h-screen">
        <div className="relative flex flex-col items-center lg:items-start text-center gap-[16px] z-20">
        <h1 className="text-[3rem] tracking-[-2px] leading-[110%] font-bold">
          {HeroText.title}
        </h1>
        <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
          {HeroText.description}
        </p>
        <Button variant="primary" className="mx-auto lg:mx-0">
          {HeroText.button}
        </Button>
      </div>
     <div className="relative lg:w-1/2">
  <Image
    src="/shape1.png"
    alt="Rectangle shape"
    layout="fill"
    objectFit="contain"
    className="absolute top-0 left-0"
  />
  <Image
    src="/shape2.png"
    alt="Rectangle shape"
    layout="fill"
    objectFit="contain"
    className="absolute top-0 left-0"
  />
  <div className="relative w-[150px] lg:w-auto h-[150px] lg:h-auto mx-auto">
    <Image
      src="/caesar.png"
      alt="Hero Image"
      layout="responsive"
      width={400}
      height={400}
      className="caesar"
      priority
    />
  </div>
</div>
      <div className="z-20 lg:w-2/2">
        <ul className="flex justify-center lg:justify-start gap-[8px]">
          {SocialLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li className="text-[0.9rem] lg:text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%] font-[500]">
                <Link href={link.path}>{link.label}</Link>
              </li>
              {index < SocialLinks.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}
