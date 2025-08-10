import { gsap } from "gsap";

export const setupBorderOnScroll = (element: HTMLElement) => {
  const onScroll = () => {
    if (window.scrollY > 0) {
      gsap.to(element, {
        boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,0.1)", // jemný spodný tieň, ktorý vyzerá ako border
        duration: 0.1,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(element, {
        boxShadow: "inset 0 0px 0 0 rgba(0,0,0,0)", // odstráni tieň
        duration: 0.1,
        ease: "power4.inOut",
      });
    }
  };

  // Nastav na začiatku bez tieňa
  gsap.set(element, { boxShadow: "inset 0 0px 0 0 rgba(0,0,0,0)" });

  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
};