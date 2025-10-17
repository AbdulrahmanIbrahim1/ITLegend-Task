"use client";
import React, { useState } from "react";
import { Maximize2, Minimize2, ArrowUpRight } from "lucide-react";

export default function CoursePlayer() {
  const [isWide, setIsWide] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleFullscreen = () => {
    const player = document.getElementById("video-player");
    if (!document.fullscreenElement) {
      player?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  const playerSize = isWide
    ? "w-screen h-[70vh]" // wide mode
    : "w-full max-w-4xl h-[350px] sm:h-[500px]"; // normal

  return (
    <div className="w-full flex flex-col items-center">
      <div
        id="video-player"
        className={`${isFullscreen
          ? "w-screen h-screen"
          : isWide
            ? "fixed inset-0 z-[999] bg-black w-screen h-[70vh]"
            : "relative w-full max-w-4xl h-[350px] sm:h-[500px]"
          } transition-all duration-300 rounded-xl overflow-hidden`}
      >

        <div className="relative w-full h-full">
          <iframe
            className="w-full h-full"
            src={
              isPlaying
                ? "https://www.youtube.com/embed/4qO0-to-WdI?autoplay=1&rel=0"
                : "https://www.youtube.com/embed/4qO0-to-WdI?rel=0"
            }
            title="Course Video"
            allowFullScreen
          ></iframe>

          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-red-600 ml-1"></div>
              </div>
            </button>
          )}
        </div>

        <div className="absolute top-2 right-2 flex gap-2 z-30">
          <button
            onClick={() => setIsWide((prev) => !prev)}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition"
          >
            <ArrowUpRight size={18} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition"
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>


    </div>
  );
}
