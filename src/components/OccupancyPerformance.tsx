import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { ChevronUp, ChevronDown } from "lucide-react";
import { bT, Ire } from "../data";

interface OccupancyPerformanceProps {
  isArabic: boolean;
}

// Color helper function based on occupancy percentage
function getOccupancyColor(value: number): string {
  return value >= 80 ? "#22c55e" : value >= 60 ? "#C89565" : value >= 40 ? "#f59e0b" : "#ef4444";
}

export function OccupancyPerformance({ isArabic }: OccupancyPerformanceProps) {
  const langKey = isArabic ? "ar" : "en";
  const [showDetail, setShowDetail] = useState(false);

  // Dynamic calculations based on bT array
  const totalOcc = bT.reduce((sum, item) => sum + item.occ, 0);
  const avgOccupancy = (totalOcc / bT.length).toFixed(1) + "%";

  const peakItem = bT.reduce((max, item) => item.occ > max.occ ? item : max, bT[0]);
  const peakValue = peakItem.occ.toFixed(1) + "%";

  return (
    <div className="space-y-6">
      {/* KPI Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: { en: "Avg Occupancy", ar: "متوسط الإشغال" },
            sub: { en: "21-05-2025 – 13-07-2026", ar: "٢١-٠٥-٢٠٢٥ إلى ١٣-٠٧-٢٠٢٦" },
            value: avgOccupancy,
            color: "text-[#C89565]",
          },
          {
            label: { en: "Peak Occupancy", ar: "ذروة الإشغال" },
            sub: peakItem.month,
            value: peakValue,
            color: "text-emerald-600",
          },
          {
            label: { en: "6-Month Forecast Occ.", ar: "متوقع ٦ أشهر" },
            sub: { en: "01-07-2026 – 31-12-2026", ar: "٠١-٠٧-٢٠٢٦ إلى ٣١-١٢-٢٠٢٦" },
            value: "90.0%",
            color: "text-[#5B4B8A]",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F5EFE7] rounded-2xl p-3 sm:p-4 border border-[#EDE5DC] text-center"
          >
            <p className={`text-xl sm:text-2xl font-black leading-tight ${item.color}`}>
              {item.value}
            </p>
            <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide mt-1">
              {item.label[langKey]}
            </p>
            <p className="text-[9px] text-[#B0A08A] mt-0.5">{item.sub[langKey]}</p>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="text-xs text-blue-700 leading-relaxed">
          {isArabic
            ? "ملاحظة: انخفاض الإشغال في الأشهر الأولى (يونيو – أغسطس 2025) يعكس مرحلة الإطلاق والتسليم التدريجي للوحدات، وليس أداءً فعلياً للتشغيل."
            : "Note: Low occupancy in early months (Jun – Aug 2025) reflects the building launch and phased unit handover, not steady-state operational performance."}
        </p>
      </div>

      {/* Bar Chart Container */}
      <div className="bg-white rounded-2xl border border-[#EDE5DC] p-4 sm:p-6 shadow-sm">
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-4">
          {isArabic ? "نسبة الإشغال الشهرية" : "Monthly Occupancy %"}
        </p>
        
        <div style={{ width: "100%", height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bT} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey={`month.${langKey}`}
                tick={{ fontSize: 10, fill: "#8B6F47" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide={true} domain={[0, 100]} />
              <Tooltip
                formatter={(val: number) => [`${val.toFixed(1)}%`, ""]}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #EDE5DC",
                  fontFamily: isArabic ? "Cairo" : "Poppins",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="occ" radius={[6, 6, 0, 0]}>
                {bT.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={getOccupancyColor(entry.occ)}
                    opacity={0.85}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-[10px] text-[#B0A08A] mt-2 italic">
          * {isArabic ? "التقرير يغطي الفترة الفعلية الكاملة من مايو 2025 حتى يونيو 2026" : "Report covers the full actual period from May 2025 to June 2026"}
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: { en: "≥80% Excellent", ar: "≥80% ممتاز" }, color: "bg-emerald-500" },
          { label: { en: "60-79% Good", ar: "60-79% جيد" }, color: "bg-[#C89565]" },
          { label: { en: "40-59% Fair", ar: "40-59% مقبول" }, color: "bg-amber-500" },
          { label: { en: "<40% Low", ar: "<40% منخفض" }, color: "bg-red-500" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            <span className="text-[10px] text-[#8B6F47] font-medium">
              {item.label[langKey]}
            </span>
          </div>
        ))}
      </div>

      {/* Collapsible Per-Unit Detail */}
      <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="w-full flex items-center justify-between p-4 bg-[#F5EFE7] text-start cursor-pointer hover:bg-[#EDE5DC]/40 transition-colors"
        >
          <div>
            <p className="text-sm font-bold text-[#8B6F47]">
              {isArabic ? "إشغال الوحدات التفصيلي" : "Per-Unit Occupancy Detail"}
            </p>
            <p className="text-xs text-[#B0A08A]">
              {isArabic ? "متوسط مايو 2025 – يونيو 2026" : "Average May 2025 – June 2026"}
            </p>
          </div>
          {showDetail ? (
            <ChevronUp className="w-4 h-4 text-[#8B6F47]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#8B6F47]" />
          )}
        </button>

        {showDetail && (
          <div className="divide-y divide-[#F5EFE7]">
            {Ire.map((unit, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-4 py-2.5 bg-white hover:bg-[#FAF8F5] transition-colors"
              >
                <p className="text-sm font-mono font-semibold text-[#5B4B8A]">{unit.id}</p>
                <div className="flex items-center gap-3">
                  <div className="w-20 sm:w-32 h-1.5 bg-[#F0EDF8] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${unit.avg}%`,
                        backgroundColor: getOccupancyColor(unit.avg),
                      }}
                    />
                  </div>
                  <p
                    className="text-sm font-bold w-12 text-end"
                    style={{ color: getOccupancyColor(unit.avg) }}
                  >
                    {unit.avg.toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
