import { useState, useRef, useEffect } from "react";
import { useInView } from "motion/react";
import { MapPin } from "lucide-react";

interface PropertyMapProps {
  isArabic: boolean;
}

export function PropertyMap({ isArabic }: PropertyMapProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView && !loaded) {
      const timer = setTimeout(() => setLoaded(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView, loaded]);

  return (
    <div ref={ref} className="rounded-3xl overflow-hidden border border-[#EDE5DC] shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F5EFE7] border-b border-[#EDE5DC]">
        <MapPin className="w-3.5 h-3.5 text-[#C89565] flex-shrink-0" />
        <p className="text-xs font-semibold text-[#8B6F47]">
          {isArabic ? "موقع العقار — حي العقيق، الرياض" : "Property Location — Al Aqiq District, Riyadh"}
        </p>
      </div>
      <div style={{ height: 200 }} className="bg-[#F5EFE7] flex items-center justify-center">
        {loaded ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3896.1617264982224!2d46.62356797536822!3d24.77553887798487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ2JzMxLjkiTiA0NsKwMzcnMzQuMSJF!5e1!3m2!1sen!2slk!4v1776786004200!5m2!1sen!2slk"
            className="w-full h-full border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mathwaa 13 Location"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-[#C89565]">
            <MapPin className="w-6 h-6 animate-pulse" />
            <p className="text-xs text-[#8B6F47]">
              {isArabic ? "جارٍ تحميل الخريطة…" : "Loading map…"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
