"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Render as a different element (e.g. "section", "li"). Defaults to div. */
  as?: ElementType;
  /** Stagger entrance by ms — handy for grids of cards. */
  delay?: number;
  /** Motion flavour: "up" (default, fade + rise), "fade", or "blur" (soft focus-in). */
  variant?: "up" | "fade" | "blur";
  /** Override the vertical travel distance for the "up"/"blur" variants. */
  distance?: number;
  className?: string;
};

/**
 * Fade-in on scroll using a single IntersectionObserver per element.
 * Animates transform/opacity/filter only (GPU-composited, no layout thrash)
 * and reveals just once. Users with `prefers-reduced-motion: reduce` see
 * content immediately — the CSS in globals.css neutralises the transition.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  distance,
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

  const variantClass =
    variant === "fade" ? "reveal--fade" : variant === "blur" ? "reveal--blur" : "";

  const style: CSSProperties = {};
  if (delay) style.transitionDelay = `${delay}ms`;
  if (distance != null)
    (style as Record<string, string>)["--reveal-distance"] = `${distance}px`;

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`
        .replace(/\s+/g, " ")
        .trim()}
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </Tag>
  );
}
