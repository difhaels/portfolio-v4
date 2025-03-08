import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PopUpProject({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
      <div className="relative flex w-[90%] max-w-2xl flex-col items-center rounded-lg bg-[#162033] p-5 shadow-lg">
        {/* Tombol Close di kanan atas */}
        <button
          className="absolute right-3 top-3 rounded-full bg-gray-700 p-2 text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Gambar Full */}
        <div className="flex w-full justify-center pt-10">
          <img
            src={images[currentIndex]}
            alt="Project Image"
            className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>

        {/* Tombol Navigasi & Indikator */}
        <div className="mt-3 flex w-full items-center justify-between">
          <button className="flex-shrink-0 p-3 text-white" onClick={prevImage}>
            <ChevronLeft className="h-8 w-8" />
          </button>
          <p className="text-white">
            {currentIndex + 1} / {images.length}
          </p>
          <button className="flex-shrink-0 p-3 text-white" onClick={nextImage}>
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
