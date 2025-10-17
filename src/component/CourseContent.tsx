"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Lock, FileText } from "lucide-react";
import ExamModal from "./ExamModal";
import PdfPopup from "./PdfPopup";

interface Lesson {
    title: string;
    questions?: string;
    duration?: string;
    pdfUrl?: string;
}

interface Week {
    title: string;
    description: string;
    lessons: Lesson[];
}

const CourseSection = ({
    title,
    description,
    lessons,
    defaultOpen = false,
}: Week & { defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [showExam, setShowExam] = useState(false);
    const [showPdf, setShowPdf] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("");

    const handleOpenPdf = (url: string) => {
        setPdfUrl(url);
        setShowPdf(true);
    };


    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full px-5 py-4 hover:bg-gray-50 transition-colors"
            >
                <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-700">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                    >
                        {lessons.map((lesson: any, i: number) => (
                            <div
                                key={i}
                                onClick={() => handleOpenPdf(lesson.pdfUrl)} 
                                className="flex justify-between items-center px-6 py-3 text-gray-700 text-sm hover:bg-gray-50 border-b border-gray-100 last:border-none cursor-pointer transition"
                            >
                                <div className="flex items-center gap-2">
                                    <FileText size={16} className="text-gray-500" />
                                    <span>{lesson.title}</span>
                                </div>

                                <div className="flex items-center gap-2 text-xs">
                                    {lesson.questions && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                setShowExam(true);
                                            }}
                                            className="flex items-center gap-1 bg-yellow-400 text-white text-[11px] font-semibold px-2 py-[3px] rounded-full shadow-sm hover:bg-yellow-500 transition"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-3 h-3"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6v6l2 2m6-2a8 8 0 11-16 0 8 8 0 0116 0z"
                                                />
                                            </svg>
                                            {lesson.questions}
                                        </button>
                                    )}

                                    {lesson.duration && (
                                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded">
                                            {lesson.duration}
                                        </span>
                                    )}

                                    <Lock size={14} className="text-gray-400" />
                                </div>
                            </div>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
            <PdfPopup open={showPdf} onClose={() => setShowPdf(false)} pdfUrl={pdfUrl} />
            <ExamModal open={showExam} onClose={() => setShowExam(false)} />
        </div>
    );
};

export default function CourseContent() {
    const weeks: Week[] = [
        {
            title: "Week 1-4",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            lessons: [
                { title: "Introduction", pdfUrl: "pdfs/Abdelrahman_Ibrahim_CyberSecurity_Engineer.pdf" },
                { title: "Course Overview", pdfUrl: "pdfs/Abdelrahman_Ibrahim_CyberSecurity_Engineer.pdf" },
                { title: "Course Overview", questions: "0 QUESTION", duration: "10 MINUTES", pdfUrl: "pdfs/Abdelrahman_Ibrahim_CyberSecurity_Engineer.pdf" },
                { title: "Course Exercise / Reference Files", },
                { title: "Code Editor Installation (Optional if you have one)", pdfUrl: "pdfs/Abdelrahman_Ibrahim_CyberSecurity_Engineer.pdf" },
                { title: "Embedding PHP in HTML" },
            ],
        },
        {
            title: "Week 5-8",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            lessons: [
                { title: "Defining Functions" },
                { title: "Function Parameters" },
                {
                    title: "Return Values From Functions",
                    questions: "2 QUESTION",
                    duration: "15 MINUTES",
                },
                { title: "Global Variable and Scope" },
                { title: "Newer Way of creating a Constant" },
                { title: "Constants" },
            ],
        },
        {
            title: "Week 5-8",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            lessons: [
                { title: "Defining Functions" },
                { title: "Function Parameters" },
                {
                    title: "Return Values From Functions",
                    questions: "2 QUESTION",
                    duration: "15 MINUTES",
                },
                { title: "Global Variable and Scope" },
                { title: "Newer Way of creating a Constant" },
                { title: "Constants" },
            ],
        },
    ];

    return (
        <div className="max-w-3xl mx-auto mt-10">
            {weeks.map((week, i) => (
                <CourseSection key={i} {...week} defaultOpen={i === 0} />
            ))}
        </div>
    );
}
