"use client";

import { RefObject, useState, useEffect } from "react";

export function useIsOnFooter<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [isOnFooter, setIsOnFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      setIsOnFooter(rect.bottom >= footerRect.top);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isOnFooter;
}
