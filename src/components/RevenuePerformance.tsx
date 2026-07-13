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
import { ChevronUp, ChevronDown, ChartColumn, TrendingUp } from "lucide-react";
import { _b, yT, xT, Dre } from "../data";

interface RevenuePerformanceProps {
  isArabic: boolean;
}

export function RevenuePerformance({ isArabic }: RevenuePerformanceProps) {
  const langKey = isArabic ? "ar" : "en";
  const [showDetail, setShowDetail] = useState(false);

  const peakRevenue = Math.max(..._b.map((o) => o.revenue));

  const kpis = [
    {
      label: { en: "Total Revenue Collected", ar: "إجمالي الإيرادات المحصّلة" },
      value: `SAR ${Math.round(xT).toLocaleString()}`,
      sub: { en: "21-05-2025 – 30-06-2026", ar: "٢١-٠٥-٢٠٢٥ إلى ٣٠-٠٦-٢٠٢٦" },
      color: "from-[#B8865F] to-[#C89565]",
      textColor: "text-white",
    },
    {
      label: { en: "Peak Monthly Revenue", ar: "أعلى إيراد شهري" },
      value: "SAR 184,091",
      sub: { en: "November 2025", ar: "نوفمبر 2025" },
      color: "from-[#5B4B8A] to-[#7A6CB0]",
      textColor: "text-white",
    },
    {
      label: { en: "Full Occupancy Benchmark", ar: "معيار الإشغال الكامل (شهري)" },
      value: `SAR ${Dre.toLocaleString()}`,
      sub: { en: "Per month at 100% occupancy", ar: "لكل شهر بإشغال 100%" },
      color: "from-emerald-600 to-emerald-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${kpi.color} rounded-2xl p-4 sm:p-5 shadow-lg`}
          >
            <p className={`text-[10px] font-bold uppercase tracking-widest opacity-75 mb-2 ${kpi.textColor}`}>
              {kpi.label[langKey]}
            </p>
            <p className={`text-xl sm:text-2xl font-black leading-tight ${kpi.textColor}`}>
              {kpi.value}
            </p>
            <p className={`text-[10px] opacity-65 mt-1 ${kpi.textColor}`}>
              {kpi.sub[langKey]}
            </p>
          </div>
        ))}
      </div>

      {/* Monthly Chart Card */}
      <div className="bg-white rounded-2xl border border-[#EDE5DC] p-4 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <ChartColumn className="w-4 h-4 text-[#C89565]" />
          <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest">
            {isArabic ? "الإيرادات الشهرية" : "Monthly Revenue"}
          </p>
        </div>

        <div style={{ width: "100%", height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={_b} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis
                dataKey={`month.${langKey}`}
                tick={{ fontSize: 10, fill: "#8B6F47" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide={true} />
              <Tooltip
                formatter={(val: number) => [`SAR ${Math.round(val).toLocaleString()}`, ""]}
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #EDE5DC",
                  fontFamily: isArabic ? "Cairo" : "Poppins",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                {_b.map((entry, idx) => (
                  <Cell
                    key={idx}
                    fill={entry.revenue === peakRevenue ? "#B8865F" : "#C89565"}
                    opacity={entry.revenue === peakRevenue ? 1 : 0.65}
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

      {/* Note Box */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">
              {isArabic ? "ملاحظة حول مرحلة الإطلاق" : "Note on the Ramp-Up Phase"}
            </p>
            <p className="text-sm text-[#3d3d3d] leading-relaxed">
              {isArabic
                ? "شهر يونيو 2025 كان شهر إطلاق مبكر مع تسليم جزئي للوحدات. الإيرادات ارتفعت تدريجياً مع اكتمال تسليم الوحدات، لتبلغ ذروتها في نوفمبر 2025 بـ SAR 184,091."
                : "June 2025 was an early launch month with partial unit handover. Revenue ramped progressively as units were delivered, peaking at SAR 184,091 in November 2025."}
            </p>
          </div>
        </div>
      </div>

      {/* Collapsible Per-Unit Revenue */}
      <div className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
        <button
          onClick={() => setShowDetail(!showDetail)}
          className="w-full flex items-center justify-between p-4 bg-[#F5EFE7] text-start cursor-pointer hover:bg-[#EDE5DC]/40 transition-colors"
        >
          <div>
            <p className="text-sm font-bold text-[#8B6F47]">
              {isArabic ? "إيرادات الوحدات التفصيلية" : "Per-Unit Revenue Breakdown"}
            </p>
            <p className="text-xs text-[#B0A08A]">
              {isArabic ? "35 وحدة" : "35 Units"}
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
            {yT.map((unit, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-4 py-2.5 bg-white hover:bg-[#FAF8F5] transition-colors"
              >
                <p className="text-sm font-mono font-semibold text-[#5B4B8A]">{unit.id}</p>
                <div className="flex items-center gap-3">
                  <div className="w-20 sm:w-32 h-1.5 bg-[#F0EDF8] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B8865F] to-[#C89565] rounded-full"
                      style={{
                        width: `${(unit.total / yT[0].total) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm font-bold text-[#C89565] w-24 text-end">
                    SAR {Math.round(unit.total).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Total Row */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F5EFE7] font-bold">
              <p className="text-sm text-[#8B6F47]">{isArabic ? "الإجمالي" : "Total"}</p>
              <p className="text-sm text-[#C89565]">
                SAR {Math.round(xT).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
