"use client";

import Image from "next/image";
import React, { useState } from "react";
import ArrowRightIcon from "@/components/ui/ArrowRightIcon";
import ArrowLeftIcon from "@/components/ui/ArrowLeftIcon";
import { floatingDots } from "@/types/constants";

const headphoneImages = [
  "/assets/images/vr-background.png",
  "/assets/images/futuristic-vr.png",
];

export default function HeadphoneSlider() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % headphoneImages.length);
  const prev = () =>
    setCurrent(
      (c) => (c - 1 + headphoneImages.length) % headphoneImages.length
    );

  return (
    <div className="relative aspect-square w-[420px] flex items-center justify-center">
      <Image
        src={headphoneImages[current]}
        alt="Headphone"
        fill
        className="object-contain drop-shadow-2xl"
        priority
      />

      {floatingDots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            filter: "blur(0.5px)",
            zIndex: 1,
          }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex z-20">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-100 transition">
          <button aria-label="Previous" onClick={prev}>
            <ArrowLeftIcon />
          </button>
          <button aria-label="Next" onClick={next}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
