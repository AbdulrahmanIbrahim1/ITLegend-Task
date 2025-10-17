"use client";
import React, { useState, useEffect } from "react";
import {
    BookOpen,
    MessageSquare,
    HelpCircle,
    Trophy,
    X,
    Send,
} from "lucide-react";
import Leaderboard from "./Leaderboard";
import { useLeaderboard } from "./LeaderboardContext";

export default function CourseActions() {
const { isLeaderboardOpen, setLeaderboardOpen, isAskOpen, setAskOpen } = useLeaderboard();
    const [question, setQuestion] = useState("");

    useEffect(() => {
        const saved = sessionStorage.getItem("userQuestion");
        if (saved) setQuestion(saved);
    }, []);

    useEffect(() => {
        sessionStorage.setItem("userQuestion", question);
    }, [question]);

    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white p-4 rounded-xl flex justify-start items-center gap-2 sm:gap-2 lg:gap-6 sticky bottom-0 sm:static ">
            <button
                onClick={() => scrollToSection("curriculum-section")}
                className="flex flex-col items-center gap-1 cursor-pointer group"
            >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                    <BookOpen size={22} />
                </div>
                <span className="text-xs mt-1 font-medium text-gray-600 group-hover:text-blue-600">
                    Curriculum
                </span>
            </button>

            <button
                onClick={() => scrollToSection("comments-section")}
                className="flex flex-col items-center gap-1 cursor-pointer group"
            >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                    <MessageSquare size={22} />
                </div>
                <span className="text-xs mt-1 font-medium text-gray-600 group-hover:text-blue-600">
                    Comments
                </span>
            </button>

            <button
                onClick={() => setAskOpen(true)}
                className="flex flex-col items-center gap-1 cursor-pointer group"
            >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                    <HelpCircle size={22} />
                </div>
                <span className="text-xs mt-1 font-medium text-gray-600 group-hover:text-blue-600">
                    Ask
                </span>
            </button>

            <button
                onClick={() => setLeaderboardOpen(true)}
                className="flex flex-col items-center gap-1 cursor-pointer group"
            >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-all">
                    <Trophy size={22} />
                </div>
                <span className="text-xs mt-1 font-medium text-gray-600 group-hover:text-blue-600">
                    Leaderboard
                </span>
            </button>

            {isAskOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-96 shadow-lg relative">
                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => setAskOpen(false)}
                        >
                            <X size={18} />
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Ask a Question</h3>
                        <textarea
                            className="w-full border rounded-lg p-2 mb-3 outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Write your question here..."
                        />
                        <div className="flex justify-end">
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                                <Send size={16} /> Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLeaderboardOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 flex justify-center items-center z-500 p-4" 
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setLeaderboardOpen(false);
                        }
                    }}
                >
                    <div 
                        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto z-500" // ⭐ التعديل هنا: max-h-[90vh] و overflow-y-auto
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="z-501 absolute top-5 right-3.5 t- sm:top-1 sm:-right-0 text-white bg-red-500 rounded-full p-1 hover:bg-red-600 transition cursor-pointer "
                            onClick={() => setLeaderboardOpen(false)}
                        >
                            <X size={20} />
                        </button>
                        
                        <Leaderboard /> 
                    </div>
                </div>
            )}
        </div>
    );
}
