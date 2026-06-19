"use client";

import { useEffect, useState } from "react";

// Aggiungi qui i path dei tuoi clip (in /public/videos/)
const CLIPS = [
  "/videos/clip-01.mp4",
  "/videos/clip-02.mp4",
  "/videos/clip-03.mp4",
  // "/videos/clip-04.mp4",
  // "/videos/clip-05.mp4",
];

const SECONDS_PER_CLIP = 3;

export default function HeroVideo() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % CLIPS.length);
    }, SECONDS_PER_CLIP * 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {CLIPS.map((src, i) => (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          playsInline
          loop
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "55% 25%",
            opacity: active === i ? 1 : 0,
            transition: "opacity 700ms ease",
          }}
        />
      ))}
    </>
  );
}
