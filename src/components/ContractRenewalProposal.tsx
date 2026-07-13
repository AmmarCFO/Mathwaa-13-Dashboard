import { TrendingUp, Shield, Users, Star, CircleCheckBig } from "lucide-react";
import { qre } from "../data";

interface ContractRenewalProposalProps {
  isArabic: boolean;
}

const reasons = [
  {
    icon: TrendingUp,
    title: { en: "We Built It From Zero", ar: "بنينا المشروع من الصفر" },
    desc: {
      en: "We launched this building from 0% occupancy in May 2025, reaching 81.6% in October 2025 and sustaining it thereafter. That ramp-up represents real, measurable operational investment.",
      ar: "أطلقنا هذا المبنى من 0% إشغال في مايو 2025، ووصلنا إلى 81.6% في أكتوبر 2025 وحافظنا عليه. هذا الإطلاق التصاعدي يمثّل استثماراً تشغيلياً حقيقياً وقابلاً للقياس.",
    },
  },
  {
    icon: Shield,
    title: { en: "Our Costs Exceed the Current Fee", ar: "تكاليفنا تتجاوز الرسوم الحالية" },
    desc: {
      en: "Annual operating costs of SAR 319,200 represent 20% of net revenue. The current 15% fee generates only SAR 156,569 on the full contract, covering less than half of the actual costs incurred.",
      ar: "التكاليف التشغيلية السنوية البالغة 319,200 ريال تمثّل 20% من صافي الإيراد. رسوم 15% الحالية تُنتج 156,569 ريالاً فقط على العقد كاملاً، مما يغطي أقل من نصف التكاليف الفعلية المتكبدة.",
    },
  },
  {
    icon: Users,
    title: { en: "A Full Team Dedicated to This Property", ar: "فريق متكامل مخصص لهذا العقار" },
    desc: {
      en: "Housekeeper, supervisor, operations support, car, marketing, reservation systems, and a full management team — all allocated to Mathwaa 13 Al Aqiq.",
      ar: "موظف تنظيف، مشرف، دعم عمليات، سيارة، تسويق، أنظمة حجز، وفريق إدارة متكامل — جميعهم مخصصون لمثوى 13 العقيق.",
    },
  },
  {
    icon: Star,
    title: { en: "20% Ensures Sustained Excellence", ar: "20% تضمن الاستمرارية بتميز" },
    desc: {
      en: "At 20%, we can continue investing in marketing, maintenance, and talent to grow occupancy further and protect your asset value.",
      ar: "برسوم 20%، نستطيع الاستمرار في الاستثمار في التسويق والصيانة والكفاءات لزيادة الإشغال وحماية قيمة أصلك.",
    },
  },
];

const commitments = [
  {
    en: "Maintain minimum 80% average occupancy or renegotiate fee",
    ar: "الحفاظ على متوسط إشغال 80% كحد أدنى أو إعادة التفاوض على الرسوم",
  },
  {
    en: "Monthly transparent reporting with full financial breakdown",
    ar: "تقارير شهرية شفافة مع تفصيل مالي كامل",
  },
  {
    en: "Continued marketing investment to grow occupancy beyond current levels",
    ar: "استثمار تسويقي مستمر لتجاوز مستويات الإشغال الحالية",
  },
  {
    en: "24-hour maintenance response time guarantee",
    ar: "ضمان وقت استجابة للصيانة خلال 24 ساعة",
  },
];

export function ContractRenewalProposal({ isArabic }: ContractRenewalProposalProps) {
  const langKey = isArabic ? "ar" : "en";

  return (
    <div className="space-y-6">
      {/* Top Graphic Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#B8865F] via-[#C89565] to-[#A07040] p-6 sm:p-8 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-3">
            {isArabic ? "مقترح تجديد العقد" : "Contract Renewal Proposal"}
          </p>
          <div className="flex items-end gap-3 mb-3">
            <span className="text-6xl sm:text-7xl font-black leading-none">20%</span>
            <div className="pb-2">
              <p className="text-sm font-semibold opacity-80">
                {isArabic ? "رسوم الإدارة المطلوبة" : "Requested Management Fee"}
              </p>
              <p className="text-xs opacity-60">
                {isArabic ? "من صافي الإيرادات الشهرية" : "of monthly net revenue"}
              </p>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            {isArabic
              ? "في ظل هيكل الرسوم الحالي (15%)، نواجه خسارة صافية قدرها -62,331 ريال (-24%) للفترة الفعلية، وخسارة متوقعة أخرى بقيمة -17,100 ريال (-12%) لفترة الـ 6 أشهر القادمة. رفع الرسوم إلى 20% يحول هذه الخسائر إلى هوامش ربح مستدامة (+23,292 ريال و +30,400 ريال على التوالي) لضمان استمرارية التشغيل."
              : "Under the current 15% fee structure, we are operating at a net loss of -SAR 62,331 (-24%) on the actual period, and expect another -SAR 17,100 (-12%) loss on the 6-month forecast. Increasing the fee to 20% turns these losses into sustainable, fair margins (+SAR 23,292 and +SAR 30,400 respectively) to ensure operational continuity."}
          </p>
        </div>
      </div>

      {/* Contract Numbers Summary */}
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: { en: "Actual Total Revenue", ar: "إجمالي الإيراد الفعلي" },
            value: "SAR 1,712,462",
            sub: { en: "21-05-2025 – 30-06-2026", ar: "٢١-٠٥-٢٠٢٥ إلى ٣٠-٠٦-٢٠٢٦" },
          },
          {
            label: { en: "6-Month Forecast", ar: "توقعات ٦ أشهر" },
            value: "SAR 950,000",
            sub: { en: "01-07-2026 – 31-12-2026", ar: "٠١-٠٧-٢٠٢٦ إلى ٣١-١٢-٢٠٢٦" },
          },
          {
            label: { en: "Total Unified Period", ar: "إجمالي الفترة الموحدة" },
            value: "SAR 2,662,462",
            sub: { en: "Actual + Forecast", ar: "الفعلي + المتوقع" },
          },
        ].map((stat, idx) => (
          <div key={idx} className="p-3 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC] text-center">
            <p className="text-xs sm:text-sm font-black text-[#C89565] leading-tight">{stat.value}</p>
            <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-wide mt-1">
              {stat.label[langKey]}
            </p>
            <p className="text-[9px] text-[#B0A08A] mt-0.5">{stat.sub[langKey]}</p>
          </div>
        ))}
      </div>

      {/* Comparison Grid Table */}
      <div>
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
          {isArabic ? "المقارنة بين العقد الحالي والمقترح" : "Current vs. Proposed Contract"}
        </p>
        <div className="rounded-2xl overflow-hidden border border-[#EDE5DC]">
          <div className="grid grid-cols-3 bg-gradient-to-r from-[#B8865F] to-[#C89565] text-white text-xs font-semibold">
            <div className="p-3">{isArabic ? "البند" : "Item"}</div>
            <div className="p-3 text-center border-s border-white/20">{isArabic ? "الحالي (15%)" : "Current (15%)"}</div>
            <div className="p-3 text-center border-s border-white/20 bg-white/10">{isArabic ? "المقترح (20%)" : "Proposed (20%)"}</div>
          </div>
          
          {qre.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 text-sm border-t border-[#F0EDF8] ${
                idx % 2 === 0 ? "bg-white" : "bg-[#FAF9FE]"
              }`}
            >
              <div className="p-3 text-[#3d3d3d] font-medium text-xs leading-snug">
                {row.item[langKey]}
              </div>
              <div className="p-3 text-center text-[#8B85B0] border-s border-[#F0EDF8] text-xs">
                {row.current[langKey]}
              </div>
              <div className="p-3 text-center font-bold text-[#8B6F47] border-s border-[#F5EFE7] bg-[#F5EFE7] text-xs">
                {row.proposed[langKey]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why 20% Details */}
      <div>
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-4">
          {isArabic ? "لماذا 20%؟" : "Why 20%?"}
        </p>
        <div className="space-y-2.5">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 bg-gradient-to-r from-[#FDFBF8] to-[#F5EFE7] rounded-2xl border border-[#EDE5DC] hover:border-[#C89565]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#1d1d1f] mb-1.5">{reason.title[langKey]}</p>
                  <p className="text-xs text-[#4d4d4d] leading-relaxed">{reason.desc[langKey]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commitments Box */}
      <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200">
        <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
          {isArabic ? "التزاماتنا في العقد الجديد" : "Our Commitments in the New Contract"}
        </p>
        <div className="space-y-2">
          {commitments.map((commitment, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-[#3d3d3d]">
              <CircleCheckBig className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>{commitment[langKey]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
