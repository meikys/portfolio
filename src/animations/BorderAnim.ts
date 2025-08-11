import { gsap } from "gsap";

export const setupBorderOnScroll = (element: HTMLElement) => {
  const onScroll = () => {
    if (window.scrollY > 0) {
      gsap.to(element, {
        boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,0.1)",
        duration: 0.1,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(element, {
        boxShadow: "inset 0 0px 0 0 rgba(0,0,0,0)",
        duration: 0.1,
        ease: "power4.inOut",
      });
    }
  };

  gsap.set(element, { boxShadow: "inset 0 0px 0 0 rgba(0,0,0,0)" });

  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
};