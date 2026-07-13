import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { ChevronUp, ChevronDown } from "lucide-react";
import { H8, G8 } from "../data";

interface OperatingExpensesProps {
  isArabic: boolean;
}

const up = 163200; // sum of H8
const dp = 156000; // sum of G8
const Fc = up + dp; // 319200
const Ab = 20; // ~20% of net revenue

const Ob = [
  { name: "Direct", nameAr: "مباشر", value: up, color: "#B8865F" },
  { name: "Indirect", nameAr: "غير مباشر", value: dp, color: "#5B4B8A" },
];

export function OperatingExpenses({ isArabic }: OperatingExpensesProps) {
  const langKey = isArabic ? "ar" : "en";
  const [showDirect, setShowDirect] = useState(false);
  const [showIndirect, setShowIndirect] = useState(false);

  return (
    <div className="space-y-6">
      {/* Hero Stat Box */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <p className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">
          {isArabic ? "إجمالي استثمار مثوى السنوي" : "Mathwaa Annual Investment"}
        </p>
        <p className="text-5xl sm:text-6xl font-black mb-1">
          SAR {Fc.toLocaleString()}
        </p>
        <p className="text-sm opacity-70">
          {isArabic ? "تكاليف تشغيلية مباشرة وغير مباشرة سنوية" : "Annual direct and indirect operational costs"}
        </p>
        
        <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-3">
          <div className="px-3 py-1.5 bg-white/10 rounded-full">
            <p className="text-xs font-bold">
              {Ab}% {isArabic ? "من صافي الإيراد" : "of net revenue"}
            </p>
          </div>
          <p className="text-xs opacity-60">
            {isArabic ? "أساس الرسوم المقترحة" : "Basis for proposed fee"}
          </p>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC] p-4 sm:p-6">
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-4">
          {isArabic ? "توزيع التكاليف" : "Cost Distribution"}
        </p>
        
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0" style={{ width: 120, height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={Ob}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {Ob.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val: number) => `SAR ${val.toLocaleString()}`}
                  contentStyle={{ borderRadius: 12, fontSize: 11 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex-1 space-y-3">
            {Ob.map((entry, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
                  <p className="text-xs font-semibold text-[#3d3d3d]">
                    {isArabic ? entry.nameAr : entry.name}
                  </p>
                </div>
                <p className="text-sm font-black text-[#1d1d1f]">
                  SAR {entry.value.toLocaleString()}
                </p>
              </div>
            ))}
            
            <div className="pt-2 border-t border-[#EDE5DC] flex items-center justify-between">
              <p className="text-xs font-bold text-[#8B6F47]">{isArabic ? "الإجمالي" : "Total"}</p>
              <p className="text-sm font-black text-[#C89565]">
                SAR {Fc.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Costs Collapsible */}
      <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
        <button
          onClick={() => setShowDirect(!showDirect)}
          className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#F5EFE7] to-[#EDE5DC] text-start cursor-pointer hover:opacity-95 transition-all"
        >
          <div>
            <p className="text-sm font-bold text-[#8B6F47]">{isArabic ? "التكاليف المباشرة" : "Direct Costs"}</p>
            <p className="text-xs text-[#B0A08A]">
              SAR {up.toLocaleString()} / {isArabic ? "سنوياً" : "year"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#B8865F]">SAR {up.toLocaleString()}</span>
            {showDirect ? (
              <ChevronUp className="w-4 h-4 text-[#8B6F47]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#8B6F47]" />
            )}
          </div>
        </button>
        
        {showDirect && (
          <div className="divide-y divide-[#F5EFE7]">
            {H8.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between px-4 py-3 bg-white">
                <p className="text-sm text-[#3d3d3d] leading-snug flex-1 pe-4">
                  {item.label[langKey]}
                </p>
                <p className="text-sm font-bold text-[#C89565] flex-shrink-0">
                  SAR {item.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Indirect Costs Collapsible */}
      <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
        <button
          onClick={() => setShowIndirect(!showIndirect)}
          className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#F0EDF8] to-[#E8E3F2] text-start cursor-pointer hover:opacity-95 transition-all"
        >
          <div>
            <p className="text-sm font-bold text-[#5B4B8A]">{isArabic ? "التكاليف غير المباشرة" : "Indirect Costs"}</p>
            <p className="text-xs text-[#9490B0]">
              SAR {dp.toLocaleString()} / {isArabic ? "سنوياً" : "year"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-[#5B4B8A]">SAR {dp.toLocaleString()}</span>
            {showIndirect ? (
              <ChevronUp className="w-4 h-4 text-[#5B4B8A]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#5B4B8A]" />
            )}
          </div>
        </button>
        
        {showIndirect && (
          <div className="divide-y divide-[#F0EDF8]">
            {G8.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between px-4 py-3 bg-white">
                <p className="text-sm text-[#3d3d3d] leading-snug flex-1 pe-4">
                  {item.label[langKey]}
                </p>
                <p className="text-sm font-bold text-[#5B4B8A] flex-shrink-0">
                  SAR {item.amount.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Significance Card */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
        <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
          {isArabic ? "الدلالة الاستثمارية" : "Investment Significance"}
        </p>
        <p className="text-sm text-[#3d3d3d] leading-relaxed">
          {isArabic
            ? `إجمالي التكاليف البالغ ${Fc.toLocaleString()} ريال يمثّل ${Ab}% من صافي الإيراد المحقق، وهو المبرر المباشر للرسوم المقترحة في عقد التجديد.`
            : `Total costs of SAR ${Fc.toLocaleString()} represent ${Ab}% of net revenue. This is the direct basis for the proposed 20% renewal fee and reflects the genuine cost of operating this property at a competitive standard.`}
        </p>
      </div>
    </div>
  );
}
