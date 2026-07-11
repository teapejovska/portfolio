"use client";

import { useEffect, useRef } from "react";

export default function MountReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        node.classList.add("visible");
      });
    });

    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
