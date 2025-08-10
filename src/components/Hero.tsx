"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { SocialLinks, HeroText } from "@/data/data";

import Button from "./ui/Button";


export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center gap-[32px] min-h-screen py-[64px] px-10 bg-[var(--bg-secondary)]"
      id="#hero"
    >
    <div className="absolute top-1/2 left-1/2 lg:shadow-none w-[80vw] max-w-[700px] aspect-square bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 -z-0"></div>
      <div className="relative flex flex-col gap-[16px] text-center z-20">
        <h1 className="text-[3rem] tracking-[-2px] leading-[110%] font-bold">
          {HeroText.title}
        </h1>
        <p className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%]">
          {HeroText.description}
        </p>
        <Button variant="primary" className="mx-auto">{HeroText.button}</Button>
      </div>
      <div className="relative">
        <Image
          src="/shape1.png"
          width={800}
          height={800}
          alt="Rectangle shape"
          className="absolute"
        />
        <Image
          src="/shape2.png"
          width={800}
          height={800}
          alt="Rectangle shape"
          className="absolute"
        />
        <Image
          src="/caesar.png"
          width={800}
          height={800}
          alt="Hero Image"
          className="caesar relative z-20"
        />
      </div>
      <div>
        <ul className="flex gap-[8px] items-center">
          {SocialLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li className="text-[1rem] text-[#474747] tracking-[0.5%] leading-[150%] font-[500]">
                <Link href={link.path}>{link.label}</Link>
              </li>
              {index < SocialLinks.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}
