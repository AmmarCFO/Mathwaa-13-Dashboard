import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}

export function SectionCard({ icon: Icon, title, children, accent = false }: SectionCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-xl border transition-shadow duration-300 hover:shadow-2xl ${
        accent
          ? "border-[#C89565]/40 bg-gradient-to-br from-[#FDFBF8] to-[#F7F0E6]"
          : "border-[#EDE5DC] bg-white"
      }`}
    >
      {/* Top Gradient Border Accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#B8865F] via-[#C89565] to-[#E8C088]" />
      
      <div className="p-5 sm:p-10">
        <div className="flex items-center gap-4 mb-7">
          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-lg">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight section-title">
            {title}
          </h2>
        </div>
        
        <div className="section-content">
          {children}
        </div>
      </div>
    </div>
  );
}
