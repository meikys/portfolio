"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { NavLinks } from "@/data/data";

import { Menu, X } from "lucide-react";

import { useIsOnFooter } from "@/hooks/useIsOnFooter";

import { Brand } from "@/data/data";

export default function Navigation() {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const isOnFooter = useIsOnFooter(headerRef);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 60 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current) return;

    if (isMenuOpen) {
      tl.current.play();
      document.body.classList.add("overflow-hidden");
    } else {
      tl.current.reverse();
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <header ref={container}>
      <nav>
        <div
          ref={headerRef}
          className={`menu-bar fixed top-0 w-full z-50 transition-colors duration-100 ${
            isOnFooter
              ? "bg-black text-white"
              : "bg-[var(--bg-secondary)] text-black"
          }`}
        >
          <div className="menu-logo relative">
            <Link
              href="/"
              className="font-[500] absolute left-14 -translate-x-1/2 -translate-y-1/2"
            >
              {Brand.brandName}
            </Link>
            <Link
              href="/"
              className="font-[500] absolute left-14 -translate-x-1/2 -translate-y-1/2 text-inherit"
            >
              {Brand.brandName}
            </Link>
          </div>
          <div className="menu-open">
            <ul className="hidden lg:flex flex-row gap-[32px]">
              {NavLinks.map((link, index) => (
                <li className="flex" key={index}>
                  <Link href={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <span onClick={toggleMenu} className="lg:hidden cursor-pointer">
              <Menu />
            </span>
          </div>
        </div>

        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              <Link href="/" className="font-[500]">
                {Brand.brandName}
              </Link>
            </div>
            <div className="menu-close" onClick={toggleMenu}>
              <span>
                <X />
              </span>
            </div>
          </div>
          <div className="menu-close-icon">
            <span>&#x2715;</span>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              {NavLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div
                    className="relative menu-link-item-holder z-20"
                    onClick={toggleMenu}
                  >
                    <Link href={link.path} className="menu-link">
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
