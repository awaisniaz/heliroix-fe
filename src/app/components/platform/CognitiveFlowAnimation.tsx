"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function CognitiveFlowAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = document.querySelector<SVGPathElement>(".flow-path");
      if (!path) return;

      const length = path.getTotalLength();

      // Reset stroke
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.set([".dot", ".label"], { opacity: 0, scale: 0.85 });

      // Approximate distances along path
      const p1 = length * 0.08; // Conversation
      const p2 = length * 0.4; // Cognition
      const p3 = length * 0.68; // Compliance
      const p4 = length * 0.98; // Learning

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.2,
        ease: "power2.inOut",
      });

      // 1) Conversation
      tl.to(path, { strokeDashoffset: length - p1, duration: 1.2 })
        .to(".dot-1", { opacity: 1, scale: 1, duration: 0.35 }, "-=0.2")
        .to(
          ".label-1",
          { opacity: 1, scale: 1, y: -4, duration: 0.45 },
          "-=0.15"
        );

      // 2) Cognition
      tl.to(path, { strokeDashoffset: length - p2, duration: 1.3 })
        .to(".dot-2", { opacity: 1, scale: 1, duration: 0.35 }, "-=0.2")
        .to(
          ".label-2",
          { opacity: 1, scale: 1, y: 4, duration: 0.45 },
          "-=0.15"
        );

      // 3) Compliance
      tl.to(path, { strokeDashoffset: length - p3, duration: 1.4 })
        .to(".dot-3", { opacity: 1, scale: 1, duration: 0.35 }, "-=0.2")
        .to(
          ".label-3",
          { opacity: 1, scale: 1, y: -4, duration: 0.45 },
          "-=0.15"
        );

      // 4) Learning
      tl.to(path, { strokeDashoffset: length - p4, duration: 1.5 })
        .to(".dot-4", { opacity: 1, scale: 1, duration: 0.35 }, "-=0.2")
        .to(
          ".label-4",
          { opacity: 1, scale: 1, y: 4, duration: 0.45 },
          "-=0.15"
        );

      // Reset
      tl.to(path, {
        strokeDashoffset: length,
        duration: 1.3,
        ease: "power1.inOut",
      }).to(".dot, .label", { opacity: 0, scale: 0.85, duration: 0.4 }, "<");
    }, ref);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={ref}
      className="w-full flex justify-center items-center py-16"
      style={{ overflow: "visible" }}
    >
      <svg
        width={562}
        height={179}
        viewBox="0 0 562 179"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* GLOWING CURVE (YOUR EXACT SVG) */}
        <g filter="url(#filter0_d_490_81)">
          <path
            d="M7.24463 14.7808C31.4113 7.2808 93.4446 0.0807972 148.245 31.2808C216.745 70.2808 257.931 98.8064 306.338 86.0436C354.745 73.2808 504.245 71.2808 553.745 171.281"
            stroke="url(#paint0_linear_490_81)"
            strokeWidth={3}
            strokeLinecap="round"
            className="flow-path"
          />
        </g>

        {/* DOTS & LABELS (positions tuned to match your target) */}

        {/* Conversation – on the left, on the line, label above */}
        <circle cx={7} cy={15} r={8} fill="#5FF0BD" className="dot dot-1" />
        <text
          x={7}
          y={-5}
          fill="#FFFFFF"
          fontSize={14}
          textAnchor="middle"
          className="label label-1"
        >
          Conversation
        </text>

        {/* Cognition – below the valley */}
        <circle cx={240} cy={100} r={8} fill="#5FF0BD" className="dot dot-2" />
        <text
          x={240}
          y={122}
          fill="#FFFFFF"
          fontSize={14}
          textAnchor="middle"
          className="label label-2"
        >
          Cognition
        </text>

        {/* Compliance – above the right mid section */}
        <circle cx={360} cy={62} r={8} fill="#5FF0BD" className="dot dot-3" />
        <text
          x={360}
          y={48}
          fill="#FFFFFF"
          fontSize={14}
          textAnchor="middle"
          className="label label-3"
        >
          Compliance
        </text>

        {/* Learning – at the end, label below */}
        <circle cx={545} cy={162} r={8} fill="#5FF0BD" className="dot dot-4" />
        <text
          x={540}
          y={182}
          fill="#FFFFFF"
          fontSize={14}
          textAnchor="middle"
          className="label label-4"
        >
          Learning
        </text>

        {/* FILTER + GRADIENT DEFINITIONS (unchanged) */}
        <defs>
          <filter
            id="filter0_d_490_81"
            x="-0.000195503"
            y="-7.34329e-05"
            width="561.889"
            height="178.746"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.4" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.164706 0 0 0 0 0.823529 0 0 0 0 0.760784 0 0 0 0.7 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_490_81"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_490_81"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_490_81"
            x1="6.74463"
            y1="23.2808"
            x2="553.745"
            y2="170.781"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22D3E8" />
            <stop offset={1} stopColor="#378A6D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
