"use client";
import React, { useEffect, useState, useRef } from "react";

export default function CourseProgress({ progress: targetProgress = 50 }: { progress: number }) {
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setProgress(targetProgress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetProgress]);

  const barWidth = 408;
  const padding = 15; 
  const progressX = padding + ((barWidth - padding * 2) * progress) / 100;

  return (
    <div className="w-full flex justify-center my-8 relative z-30" ref={containerRef}>
      <svg width="411" height="76" viewBox="0 0 411 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 49H408" stroke="#E6E6E6" strokeWidth="5" strokeLinecap="round" />
        <path
          d={`M3 49H${3 + ((barWidth - 3) * progress) / 100}`}
          stroke="#6ABD8A"
          strokeWidth="5"
          strokeLinecap="round"
          style={{ transition: "all 1s ease" }}
        />
        <polygon points={`${progressX},40 ${progressX + 3.1},34.75 ${progressX - 3.1},34.75`} fill="#C8C8C8" />
        <circle cx={progressX} cy={16} r={15} stroke="#C8C8C8" strokeWidth="2" fill="white" />
        <text
          x={progressX}
          y={20}
          textAnchor="middle"
          fill="#485293"
          fontSize="10"
          fontWeight="bold"
          style={{ pointerEvents: "none" }}
        >
          You
        </text>
      </svg>

      {/* {hovered && ( */}
      {true && (
        <div
          className="absolute flex items-center justify-center text-xs font-bold text-gray-800 bg-white"
          style={{
            left: progressX - 10,
            top: 55,
            textAlign: "center",
          }}
        >
          {Math.round(progress)}%
        </div>
      )}

      <div
        className="absolute w-[411px] h-[76px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      ></div>
    </div>
  );
}
