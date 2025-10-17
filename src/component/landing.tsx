"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CoursePlayer from "./CoursePlayer";
import CourseActions from "./CourseActions";
import CourseMaterials from "./CourseMaterials";
import CourseProgress from "./CourseProgress";
import CourseContent from "./CourseContent";
import ReviewsSection from "./ReviewsSection";
import { useLeaderboard } from "@/component/LeaderboardContext";



export default function Landing() {

    const [isSticky, setIsSticky] = useState(false);
    const { isLeaderboardOpen, setLeaderboardOpen, isAskOpen, setAskOpen } = useLeaderboard();
    const playerRef = useRef<HTMLDivElement>(null);
    const [playerTop, setPlayerTop] = useState(0);

    useEffect(() => {
        if (!playerRef.current) return;

        const rect = playerRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setPlayerTop(rect.top + scrollTop);
        console.log(playerTop);

        const handleScroll = () => {
            if (window.innerWidth < 640) {
                if (window.scrollY >= playerTop) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [playerTop]);





    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black p-4 bg-[#FFFFFF]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-1 sm:col-span-2  p-2 lg:p-6 rounded-lg "
            >
                <div className="relative">
                    {/* placeholder يظهر فقط لو الفيديو ثابت */}
                    {isSticky && playerRef.current && (
                        <div style={{ height: playerRef.current.offsetHeight }} />
                    )}

                    <div
                        ref={playerRef}
                        className={`${isSticky ? "fixed top-0 left-0 w-full z-50 px-4" : "relative w-full"} ${isLeaderboardOpen && "sm:block hidden"} ${isAskOpen && "sm:block hidden"}`}
                    >
                        <CoursePlayer />
                    </div>

                    {/* باقي المحتوى */}
                    <div className="mt-4">
                        <div >
                            <CourseActions />
                            <CourseMaterials />
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className=" text-balck p-6 rounded-lg "
            >
                <h2 className="text-lg font-semibold mb-4">Topics for This Course </h2>
                <CourseProgress progress={68} />
                <CourseContent />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className=" col-span-1 sm:col-span-2 p-6 rounded-lg "
            >
                <ReviewsSection />
            </motion.div>
        </div>
    );
}
