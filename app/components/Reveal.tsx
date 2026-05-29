"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Render as a different element (e.g. "section", "li"). Defaults to div. */
  as?: ElementType;
  /** Stagger entrance by ms — handy for grids of cards. */
  delay?: number;
  className?: string;
};

/**
 * Fade-in-up on scroll using a single IntersectionObserver per element.
 * Animates transform/opacity only (GPU-composited, no layout thrash) and
 * reveals just once. Users with `prefers-reduced-motion: reduce` see content
 * immediately — the CSS in globals.css neutralises the transition for them.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced-motion is handled entirely in CSS (globals.css forces `.reveal`
    // to its visible state under the media query), so the observer can run for
    // everyone without a JS branch.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
