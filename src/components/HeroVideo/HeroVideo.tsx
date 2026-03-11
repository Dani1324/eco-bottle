"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroVideo.module.css";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Assicura che il video parta dopo il mount del client
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Alcuni browser potrebbero bloccare l'autoplay
        console.debug("Autoplay bloccato dal browser");
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={styles.heroVideo}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/video/hero-model.mp4" type="video/mp4" />
    </video>
  );
}
