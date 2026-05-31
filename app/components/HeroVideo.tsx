"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed, muted, looping background video for the hero.
 * The poster shows instantly (and is the LCP-friendly first paint), the
 * compressed B&W clip fades in once it can play. Users with
 * `prefers-reduced-motion: reduce` never see motion — the video is paused
 * and only the poster frame remains.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Slow, cinematic glide — the source plays back at a calmer pace.
    const PLAYBACK_RATE = 0.6;

    const apply = () => {
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.playbackRate = PLAYBACK_RATE;
        // play() can reject if the tab is backgrounded; ignore that.
        void video.play().catch(() => {});
      }
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      poster="/hero/hero-poster.jpg"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src="/hero/hero.webm" type="video/webm" />
      <source src="/hero/hero.mp4" type="video/mp4" />
    </video>
  );
}
