"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LearningLoopAnimation() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typed querySelector so we get access to getTotalLength
      const circle = document.querySelector<SVGGeometryElement>(".loop-circle");
      if (!circle) return; // TS: circle is non-null after this

      const length = circle.getTotalLength();

      // Set up stroke
      gsap.set(circle, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        ease: "power2.inOut",
      });

      // -------- TOP (0% → 25%) --------
      tl.to(circle, {
        strokeDashoffset: length * 0.75,
        duration: 1.2,
      })
        .fromTo(
          ".dot-1",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.25"
        )
        .fromTo(
          ".label-1",
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.1"
        )
        .fromTo(
          ".arrow-1",
          { opacity: 0, rotate: -20 },
          { opacity: 1, rotate: 0, duration: 0.35 }
        );

      // -------- RIGHT (25% → 50%) --------
      tl.to(circle, {
        strokeDashoffset: length * 0.5,
        duration: 1.2,
      })
        .fromTo(
          ".dot-2",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.25"
        )
        .fromTo(
          ".label-2",
          { opacity: 0, x: 12 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.1"
        )
        .fromTo(
          ".arrow-2",
          { opacity: 0, rotate: -20 },
          { opacity: 1, rotate: 0, duration: 0.35 }
        );

      // -------- BOTTOM (50% → 75%) --------
      tl.to(circle, {
        strokeDashoffset: length * 0.25,
        duration: 1.2,
      })
        .fromTo(
          ".dot-3",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.25"
        )
        .fromTo(
          ".label-3",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.1"
        )
        .fromTo(
          ".arrow-3",
          { opacity: 0, rotate: -20 },
          { opacity: 1, rotate: 0, duration: 0.35 }
        );

      // -------- LEFT (75% → 100%) --------
      tl.to(circle, {
        strokeDashoffset: 0,
        duration: 1.2,
      })
        .fromTo(
          ".dot-4",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.25"
        )
        .fromTo(
          ".label-4",
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.1"
        )
        .fromTo(
          ".arrow-4",
          { opacity: 0, rotate: -20 },
          { opacity: 1, rotate: 0, duration: 0.35 }
        );

      // RESET
      tl.to(circle, {
        strokeDashoffset: length,
        duration: 1.4,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center" ref={containerRef}>
      <svg
        width="500"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle rotated so stroke starts at top */}
        <circle
          cx="180"
          cy="180"
          r="120"
          stroke="#2DD4BF"
          strokeWidth="2.4"
          className="loop-circle"
          strokeLinecap="round"
          transform="rotate(-90 180 180)"
          opacity="0.4"
        />

        {/* ARROWS */}
        <path
          d="M180 60 L188 70 L172 70 Z"
          fill="#2DD4BF"
          className="arrow arrow-1 opacity-0"
        />
        <path
          d="M300 180 L290 172 L290 188 Z"
          fill="#2DD4BF"
          className="arrow arrow-2 opacity-0"
        />
        <path
          d="M180 300 L172 290 L188 290 Z"
          fill="#2DD4BF"
          className="arrow arrow-3 opacity-0"
        />
        <path
          d="M60 180 L70 188 L70 172 Z"
          fill="#2DD4BF"
          className="arrow arrow-4 opacity-0"
        />

        {/* DOTS */}
        <circle
          cx="180"
          cy="48"
          r="7"
          fill="#2DD4BF"
          className="dot dot-1 opacity-0"
        />
        <circle
          cx="312"
          cy="180"
          r="7"
          fill="#2DD4BF"
          className="dot dot-2 opacity-0"
        />
        <circle
          cx="180"
          cy="312"
          r="7"
          fill="#2DD4BF"
          className="dot dot-3 opacity-0"
        />
        <circle
          cx="48"
          cy="180"
          r="7"
          fill="#2DD4BF"
          className="dot dot-4 opacity-0"
        />

        {/* LABELS */}
        <text
          x="180"
          y="25"
          textAnchor="middle"
          fill="#2DD4BF"
          className="label label-1 opacity-0"
          style={{ fontSize: "15px" }}
        >
          Project
        </text>

        <text
          x="330"
          y="185"
          fill="#2DD4BF"
          className="label label-2 opacity-0"
          style={{ fontSize: "15px" }}
        >
          Learning Hub
        </text>

        <text
          x="180"
          y="345"
          textAnchor="middle"
          fill="#2DD4BF"
          className="label label-3 opacity-0"
          style={{ fontSize: "15px" }}
        >
          Rule Update
        </text>

        <text
          x="-50"
          y="185"
          fill="#2DD4BF"
          className="label label-4 opacity-0"
          style={{ fontSize: "15px" }}
        >
          Next Design
        </text>
      </svg>
    </div>
  );
}
