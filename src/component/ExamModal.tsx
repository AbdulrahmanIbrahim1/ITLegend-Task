"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExamPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ExamModal({ open, onClose }: ExamPopupProps) {
  const [time, setTime] = useState(572); // 09:32
  const [selected, setSelected] = useState<string>("Bahar");

  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [open]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const options = ["Asam", "Bahar", "Kamaltake", "Utter Pardesh"];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[400px] h-[620px] bg-gradient-to-b from-[#3056FF] to-[#436FFF] rounded-[24px] shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              onClick={onClose}
              className="absolute top-3 left-3 text-white text-2xl font-bold hover:opacity-75"
            >
              ×
            </button>

            <div className="bg-yellow-400 text-white font-semibold rounded-lg px-4 py-2 mt-6 shadow-md">
              🕒 {formatTime(time)}
            </div>

            <div className="flex gap-3 mt-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                    num === 2
                      ? "bg-white text-blue-600 border-white"
                      : "text-white border-white"
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-2xl shadow-lg p-5 w-[90%]">
              <p className="text-gray-800 font-medium text-[15px] mb-4">
                1. Among the following status of India, which one has the oldest
                rock formations in the country?
              </p>

              <div className="flex flex-col gap-3">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer border transition ${
                      selected === option
                        ? "bg-[#3056FF] text-white border-[#3056FF]"
                        : "bg-white border-gray-200 hover:border-[#3056FF]"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                        selected === option
                          ? "border-white bg-white/30"
                          : "border-gray-400"
                      }`}
                    >
                      {selected === option && (
                        <div className="w-2.5 h-2.5 bg-white rounded-sm" />
                      )}
                    </div>
                    <span className="text-[14px]">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
