"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function HeaderWordmark({
  visible = true,
}: {
  visible?: boolean;
}) {
  return (
    <span
      data-visible={visible}
      className="inline-flex h-8 items-center font-mono text-sm font-semibold tracking-[0.2em] uppercase transition-[opacity,translate] duration-300 data-[visible=false]:translate-y-2 data-[visible=false]:opacity-0 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    >
      Ellie
    </span>
  );
}

function AnimatedSiteHeaderMark() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <HeaderWordmark visible={visible} />
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <AnimatedSiteHeaderMark /> : <HeaderWordmark />;
}
