import { Wrench } from "lucide-react";
import { Wre } from "../data";

interface OperationalChallengesProps {
  isArabic: boolean;
}

const challengeTypesConfig = {
  improvement: {
    color: "bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
    badge: { en: "Improvement Opportunity", ar: "فرصة تحسين" },
    badgeColor: "bg-amber-100 text-amber-700",
  },
  operational: {
    color: "bg-blue-50 border-blue-200",
    dot: "bg-blue-500",
    badge: { en: "Operational Gap", ar: "فجوة تشغيلية" },
    badgeColor: "bg-blue-100 text-blue-700",
  },
  regulatory: {
    color: "bg-purple-50 border-purple-200",
    dot: "bg-purple-500",
    badge: { en: "Regulatory Constraint", ar: "قيد تنظيمي" },
    badgeColor: "bg-purple-100 text-purple-700",
  },
  external: {
    color: "bg-slate-50 border-slate-200",
    dot: "bg-slate-500",
    badge: { en: "External Factor", ar: "عامل خارجي" },
    badgeColor: "bg-slate-100 text-slate-700",
  },
};

export function OperationalChallenges({ isArabic }: OperationalChallengesProps) {
  const langKey = isArabic ? "ar" : "en";

  return (
    <div className="space-y-6">
      {/* Intro Box */}
      <div className="p-4 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]">
        <p className="text-sm text-[#3d3d3d] leading-relaxed">
          {isArabic
            ? "فيما يلي توثيق شفاف للتحديات التشغيلية التي واجهناها خلال فترة العقد، وكيف نقترح معالجتها في الدورة القادمة. كل نقطة تمثّل فرصة واضحة لرفع أداء العقار وقيمته في السوق."
            : "The following is a transparent account of the operational challenges encountered during the contract period and how we propose to address them in the next cycle. Each item represents a clear opportunity to enhance the performance and market value of the property."}
        </p>
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {Wre.map((challenge, idx) => {
          const config = challengeTypesConfig[challenge.type];
          return (
            <div key={idx} className={`rounded-2xl border p-4 ${config.color}`}>
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${config.dot}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <p className="text-sm font-bold text-[#1d1d1f]">{challenge.title[langKey]}</p>
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${config.badgeColor}`}>
                      {config.badge[langKey]}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="ps-5 space-y-2">
                <p className="text-sm text-[#3d3d3d] leading-relaxed">{challenge.desc[langKey]}</p>
                <p className="text-sm text-[#6B5A44] leading-relaxed">
                  → {challenge.opportunity[langKey]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Conclusion Box */}
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
        <Wrench className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-emerald-800 leading-relaxed">
          {isArabic
            ? "معالجة هذه النقاط التشغيلية في العقد القادم ستدعم أداءً أقوى وأسعار إيجار أعلى وتجربة أفضل للمستأجرين، وهي نتائج تصبّ مباشرة في مصلحة المالك والمشغّل على حدٍّ سواء."
            : "Addressing these operational points in the next contract will support stronger performance, higher monthly rental rates, and a better tenant experience. These are outcomes that serve both the owner and operator directly."}
        </p>
      </div>
    </div>
  );
}
