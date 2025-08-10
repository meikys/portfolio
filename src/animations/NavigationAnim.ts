"use client";
import { gsap } from "gsap";

export const NavigationAnim = (container: HTMLElement) => {
  gsap.set(".menu-link-item-holder", { y: 60 });

  const tl = gsap
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

  return tl;
};
