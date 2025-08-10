import React from "react";

import Link from "next/link";

import Button from "./ui/Button";
import IconsOutput from "./icons/IconsOutput";

import { FooterText, NavLinks } from "@/data/data"


export default function Footer() {
  return (
    <section
      id="footer"
      className="flex flex-col justify-center items-center min-h-screen py-[64px] px-10 bg-gradient-to-b from-black via-[#0b0b0b] to-[#121212]"
    >
      <div className="flex flex-col items-center gap-[40px]">
        
        <div className="flex flex-col gap-[16px] items-center">
          <h2 className="text-white text-[2rem] tracking-[-2%] leading-[110%] font-bold text-center">
            {FooterText.firstTitle}<br />
            {FooterText.secondTitle}
          </h2>
          <Button variant="secondary" className="mx-auto">
            {FooterText.button}
          </Button>
          <p className="text-gray-400 text-sm mt-2 text-center">
            {FooterText.microText}
          </p>
        </div>
        <IconsOutput />
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="hover:text-white transition">{link.label}</Link>
              </li>
            ))}
            
            
          </ul>
        </nav>
        <p className="text-gray-400 text-sm mt-4">
          {FooterText.email}
        </p>
        <div className="flex items-center gap-2 mt-2 text-gray-500 text-xs">
          <span>{FooterText.copyrightSymbol} {new Date().getFullYear()} {FooterText.copyrightText}</span>
        </div>
      </div>
    </section>
  );
}
