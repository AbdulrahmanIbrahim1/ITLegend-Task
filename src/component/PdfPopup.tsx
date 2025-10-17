"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PdfPopup({
  open,
  onClose,
  pdfUrl,
}: {
  open: boolean;
  onClose: () => void;
  pdfUrl: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative bg-white w-full h-full md:w-[80%] md:h-[90%] rounded-lg shadow-xl overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Close
            </button>
            {pdfUrl ? (
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="PDF Viewer"
              />
            ) : (
              <p className="text-center text-gray-500 mt-20">
                No PDF available for this lesson
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
