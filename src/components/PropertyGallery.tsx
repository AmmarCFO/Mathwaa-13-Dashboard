import { useState, useCallback, useEffect } from "react";
import { Images, ChevronLeft, ChevronRight } from "lucide-react";
import { fi } from "../data";

interface PropertyGalleryProps {
  isArabic: boolean;
}

export function PropertyGallery({ isArabic }: PropertyGalleryProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % fi.length);
  }, []);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + fi.length) % fi.length);
  }, []);

  // Preload next image
  useEffect(() => {
    const nextIndex = (index + 1) % fi.length;
    const img = new Image();
    img.src = fi[nextIndex];
  }, [index]);

  // Autoplay loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(handleNext, 2000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Images className="w-3.5 h-3.5 text-[#C89565]" />
          <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest">
            {isArabic ? "معرض الصور" : "Property Gallery"}
          </p>
        </div>
        <p className="text-[10px] text-[#B0A08A] font-medium">
          {index + 1} / {fi.length}
        </p>
      </div>

      <div
        className="relative rounded-2xl overflow-hidden bg-[#1a1a2e] shadow-xl cursor-pointer"
        style={{ aspectRatio: "16/10" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={handleNext}
      >
        <img
          src={fi[index]}
          alt={`Property photo ${index + 1}`}
          className="w-full h-full object-cover"
          style={{ transition: "opacity 0.4s ease" }}
          key={index}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute start-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute end-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Small thumbnails container */}
      <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {fi.map((src, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIndex(idx);
              setIsPaused(true);
            }}
            className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
              idx === index ? "ring-2 ring-[#C89565] opacity-100" : "opacity-50 hover:opacity-80"
            }`}
            style={{ width: 52, height: 36 }}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-1 flex-wrap">
        {fi.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIndex(idx);
              setIsPaused(true);
            }}
            className={`rounded-full transition-all ${
              idx === index ? "w-4 h-1.5 bg-[#C89565]" : "w-1.5 h-1.5 bg-[#D0C8BC]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
