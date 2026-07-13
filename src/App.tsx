import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Calendar,
  FileText,
  Lightbulb,
  Megaphone,
  ChartColumn,
  Wrench,
  DollarSign,
  Handshake,
  MapPin,
  ExternalLink,
  Shield,
  Star,
  Users,
} from "lucide-react";

// Sub-components
import { ScrollProgress } from "./components/ScrollProgress";
import { FadeUp } from "./components/FadeUp";
import { SectionCard } from "./components/SectionCard";
import { PropertyMap } from "./components/PropertyMap";
import { UnitDivision } from "./components/UnitDivision";
import { PropertyGallery } from "./components/PropertyGallery";
import { OccupancyPerformance } from "./components/OccupancyPerformance";
import { RevenuePerformance } from "./components/RevenuePerformance";
import { MarketingEfforts } from "./components/MarketingEfforts";
import { OperationalChallenges } from "./components/OperationalChallenges";
import { OperatingExpenses } from "./components/OperatingExpenses";
import { ContractRenewalProposal } from "./components/ContractRenewalProposal";

export default function App() {
  const [isArabic, setIsArabic] = useState(true);
  const [mounted, setMounted] = useState(false);

  const r = isArabic ? "ar" : "en";

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const buildingDetails = {
    ownerName: {
      en: "Rakhaa' Investment Company",
      ar: "شركة رخاء للاستثمار",
    },
    buildingName: {
      en: "Mathwaa 13 Al Aqiq",
      ar: "مثوى 13 العقيق",
    },
    location: {
      en: "Al Aqiq District, Riyadh, Saudi Arabia",
      ar: "حي العقيق، الرياض، المملكة العربية السعودية",
    },
    assetType: {
      en: "Residential Building",
      ar: "مبنى سكني",
    },
    totalUnits: 35,
    contractStart: {
      en: "May 2025",
      ar: "مايو 2025",
    },
    contractEnd: {
      en: "May 2026",
      ar: "مايو 2026",
    },
    reportDate: {
      en: "April 2026",
      ar: "أبريل 2026",
    },
    reportPeriod: {
      en: "May 2025 – May 2026",
      ar: "مايو 2025 – مايو 2026",
    },
  };

  const labels = {
    preparedFor: {
      en: "Prepared For",
      ar: "مُعدٌّ لـ",
    },
    executiveSummary: {
      en: "Executive Summary",
      ar: "الموجز التنفيذي",
    },
    executiveText: {
      en: [
        "This report documents the full performance of Mathwaa's management of Mathwaa 13 Al Aqiq throughout the contract period, covering occupancy results, revenue collected, and the investment we made to bring this building to operational stability.",
        "We launched this building from zero, navigated a phased unit handover, and steadily grew occupancy from 4% in June 2025 to 81.2% by June 2026. This trajectory reflects real operational commitment.",
        "Most importantly, this report presents a transparent breakdown of our actual annual costs of SAR 319,200, which equal 19% of net revenue, and makes the case for renewing under a 20% management fee.",
      ],
      ar: [
        "يوثّق هذا التقرير الأداء الكامل لإدارة مثوى لمبنى مثوى 13 في حي العقيق خلال فترة العقد، ويشمل نتائج الإشغال والإيرادات المحصّلة والاستثمار الذي قدّمناه لإيصال المبنى إلى الاستقرار التشغيلي.",
        "أطلقنا هذا المبنى من الصفر، وتجاوزنا مرحلة التسليم التدريجي للوحدات، ورفعنا الإشغال تدريجياً من 4% في يونيو 2025 إلى 81.2% في يونيو 2026، وهو مسار يعكس التزاماً تشغيلياً حقيقياً.",
        "والأهم من ذلك، يقدّم هذا التقرير تفصيلاً شفافاً لتكاليفنا الفعلية السنوية البالغة 319,200 ريال، التي تعادل 19% من صافي الإيراد، ويقدّم الحجة لتجديد العقد برسوم إدارة بنسبة 20%.",
      ],
    },
    buildingOverview: {
      en: "Building Overview",
      ar: "نظرة عامة على المبنى",
    },
    revenueTitle: {
      en: "Revenue Performance",
      ar: "أداء الإيرادات",
    },
    occupancyTitle: {
      en: "Occupancy Performance",
      ar: "أداء الإشغال",
    },
    marketingTitle: {
      en: "Marketing Efforts",
      ar: "جهود التسويق",
    },
    challengesTitle: {
      en: "Operational Challenges and Opportunities",
      ar: "التحديات التشغيلية والفرص",
    },
    ourInvestment: {
      en: "Our Investment in This Property",
      ar: "استثمارنا في هذا العقار",
    },
    ourInvestmentIntro: {
      en: "Beyond the management fee, Mathwaa invested significantly in this property's operations. Below is a transparent breakdown of every riyal we allocate annually to run Mathwaa 13 at the highest standard.",
      ar: "بعيداً عن رسوم الإدارة، استثمرت مثوى بشكل كبير في تشغيل هذا العقار. فيما يلي تفصيل شفاف لكل ريال نخصصه سنوياً لتشغيل مثوى 13 بأعلى مستوى.",
    },
    contractProposal: {
      en: "Contract Renewal Proposal",
      ar: "مقترح تجديد العقد",
    },
    insights: {
      en: "Key Highlights",
      ar: "أبرز النتائج",
    },
    closing: {
      en: "A Message to the Owner",
      ar: "رسالة إلى المالك",
    },
    closingText: {
      en: [
        "We entered this partnership with a full commitment to building Mathwaa 13 into a high-performing asset and we delivered.",
        "Every riyal documented in this report represents our genuine investment into your property's success. The 20% fee aligns our incentives and ensures we can continue operating at this level.",
        "We look forward to continuing this journey together.",
      ],
      ar: [
        "دخلنا هذه الشراكة بالتزام كامل لتحويل مثوى 13 إلى أصل عقاري عالي الأداء وقد حققنا ذلك.",
        "كل ريال موثّق في هذا التقرير يمثّل استثماراً حقيقياً في نجاح عقارك. رسوم 20% تُوازن مصالحنا المشتركة وتضمن استمرارية التشغيل بهذا المستوى.",
        "نتطلع إلى مواصلة هذه الرحلة معاً.",
      ],
    },
  };

  const highlightsData = [
    {
      category: { en: "Revenue", ar: "الإيرادات" },
      bg: "from-blue-50 to-blue-50/50",
      border: "border-blue-100",
      dot: "bg-blue-500",
      label: "text-blue-700",
      items: [
        {
          en: "SAR 1,712,462 actual total revenue achieved from May 2025 to June 2026, with a forward forecast of SAR 950,000 for the upcoming 6 months.",
          ar: "تحقيق إيرادات إجمالية فعلية بقيمة 1,712,462 ريالاً من مايو 2025 حتى يونيو 2026، مع توقعات بقيمة 950,000 ريال للأشهر الستة القادمة.",
        },
        {
          en: "Peak monthly revenue of SAR 184,091 in November 2025, with consistent stable occupancy and strong performance maintained throughout.",
          ar: "بلغت ذروة الإيرادات الشهرية 184,091 ريال في نوفمبر 2025، مع الحفاظ على إشغال مستقر وأداء قوي ومستمر طوال الفترة.",
        },
      ],
    },
    {
      category: { en: "Occupancy", ar: "الإشغال" },
      bg: "from-emerald-50 to-emerald-50/50",
      border: "border-emerald-100",
      dot: "bg-emerald-500",
      label: "text-emerald-700",
      items: [
        {
          en: "Grew from 4% in June 2025 to 81.6% in October 2025, maintaining a high-performance average above 75% for subsequent months.",
          ar: "نما الإشغال من 4% في يونيو 2025 إلى 81.6% في أكتوبر 2025، مع الحفاظ على متوسط أداء مرتفع فوق 75% للأشهر اللاحقة.",
        },
        {
          en: "14 units achieved average occupancy above 80%, proving strong market demand at the right price point.",
          ar: "14 وحدة حققت متوسط إشغال فوق 80%، مما يثبت الطلب القوي بالنقطة السعرية المناسبة.",
        },
      ],
    },
    {
      category: { en: "Our Investment", ar: "استثمارنا" },
      bg: "from-amber-50 to-amber-50/50",
      border: "border-amber-100",
      dot: "bg-amber-500",
      label: "text-amber-700",
      items: [
        {
          en: "Annual operating costs of SAR 319,200 across direct and indirect expenses, equal to 19% of net revenue.",
          ar: "تكاليف تشغيلية سنوية تبلغ 319,200 ريال عبر المصاريف المباشرة وغير المباشرة، تعادل 19% من صافي الإيراد.",
        },
        {
          en: "At the current 15% structure, Mathwaa has operated at a net loss of -SAR 62,331 (-24%). Transitioning to a 20% fee structure ensures a fair, sustainable margin of +9.1% to maintain high quality of service.",
          ar: "في ظل هيكل الرسوم الحالي البالغ 15%، عملت مثوى بخسارة صافية بلغت -62,331 ريال (-24%). الانتقال إلى رسوم 20% يضمن هامش ربح عادل ومستدام بنسبة +9.1% للحفاظ على جودة الخدمة العالية.",
        },
      ],
    },
  ];

  const logoUrl =
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69732f9a6a14d6634b2cbd49/e37995eab_mathwa_logo-removebg-preview.png";

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(160deg, #FDFAF7 0%, #F7F1E8 50%, #EDE5DC 100%)",
        fontFamily: isArabic ? "'Cairo', sans-serif" : "'Poppins', sans-serif",
      }}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <ScrollProgress />

      {/* Header */}
      <header
        className="bg-white/80 backdrop-blur-2xl border-b border-[#C89565]/10 sticky top-0 z-50"
        style={{
          boxShadow: "0 1px 0 rgba(200,149,101,0.06), 0 4px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <img src={logoUrl} alt="Mathwaa" className="w-9 h-9 object-contain" />
            <div>
              <span className="text-base font-bold text-[#5B4B8A] block leading-none">
                {isArabic ? "مثوى" : "Mathwaa"}
              </span>
              <span className="text-[9px] text-[#B0A08A] font-medium tracking-widest uppercase">
                {isArabic ? "تقرير تجديد العقد" : "Contract Renewal Report"}
              </span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: isArabic ? -16 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsArabic(!isArabic)}
            className="text-[#B8865F] text-xs font-bold px-4 py-2 rounded-full border border-[#C89565]/25 bg-gradient-to-r from-[#F5EFE7] to-[#EDE5DC] hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            {isArabic ? "English" : "العربية"}
          </motion.button>
        </div>
      </header>

      {/* Main Content Stage */}
      <div className="max-w-3xl mx-auto px-3 sm:px-8 pb-12">
        {/* Hero Section Container */}
        <div className="pt-0 mb-10 sm:mb-16">
          <div
            className="relative w-full overflow-hidden rounded-b-3xl shadow-xl"
            style={{ height: "clamp(300px, 55vw, 520px)" }}
          >
            <img
              src="https://media.base44.com/images/public/69e77c86f851f551b6d94035/b1012702c_DSC09539.jpg"
              alt="Mathwaa 13 Al Aqiq"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
              style={{
                background: "linear-gradient(to top, rgba(15,10,5,0.80) 0%, rgba(15,10,5,0.35) 45%, rgba(15,10,5,0.10) 100%)",
              }}
            />

            {/* Logo Watermark Top-Left */}
            <div className="absolute top-4 start-4 sm:top-6 sm:start-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <img src={logoUrl} alt="Mathwaa" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
              </div>
            </div>

            {/* Document Pill Top-Right */}
            <div className="absolute top-4 end-4 sm:top-6 sm:end-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1">
                <p className="text-white/80 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  {isArabic ? "تقرير تجديد العقد" : "Contract Renewal Report"}
                </p>
              </div>
            </div>

            {/* Building Info Overlay Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8">
              <p className="hero-text-animate hero-text-animate-1 text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-1.5">
                {buildingDetails.location[r]}
              </p>
              <h1 className="hero-text-animate hero-text-animate-2 text-white text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
                {buildingDetails.buildingName[r]}
              </h1>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { text: isArabic ? "35 وحدة" : "35 Units", Icon: Building2 },
                  { text: buildingDetails.reportPeriod[r], Icon: Calendar },
                ].map((item, idx) => {
                  const Icon = item.Icon;
                  return (
                    <span
                      key={idx}
                      className={`hero-text-animate hero-text-animate-${idx + 3} inline-flex items-center gap-1.5 bg-white/12 backdrop-blur-md border border-white/20 text-white/85 text-xs font-semibold px-3 py-1.5 rounded-full`}
                    >
                      <Icon className="w-3 h-3" />
                      {item.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating Investor Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 sm:mx-0 -mt-5 relative z-10"
          >
            <div className="bg-white rounded-3xl border border-[#C89565]/25 investor-glow p-5 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#F5EFE7] to-[#EDE5DC] border border-[#C89565]/20 flex items-center justify-center flex-shrink-0 shadow-md">
                <img src={logoUrl} alt="Mathwaa" className="w-10 h-10 sm:w-11 sm:h-11 object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-start">
                <p className="text-[10px] font-bold text-[#B0A08A] uppercase tracking-widest mb-1">
                  {labels.preparedFor[r]}
                </p>
                <p className="text-2xl sm:text-3xl font-black tracking-tight owner-name-shimmer mb-3 leading-tight">
                  {buildingDetails.ownerName[r]}
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <span className="glass-pill text-[10px] font-bold text-[#8B6F47] px-3 py-1 rounded-full border border-[#EDE5DC]">
                    {isArabic ? "مُعدٌّ بواسطة" : "Prepared by"}: {isArabic ? "فريق الإيرادات، مثوى" : "Revenue Team, Mathwaa"}
                  </span>
                  <span className="glass-pill text-[10px] font-bold text-[#8B6F47] px-3 py-1 rounded-full border border-[#EDE5DC]">
                    {buildingDetails.reportDate[r]}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Embed Card */}
          <FadeUp delay={0.1} className="mt-4">
            <PropertyMap isArabic={isArabic} />
          </FadeUp>
        </div>

        {/* Modular Grid sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* Executive Summary */}
          <FadeUp>
            <SectionCard icon={FileText} title={labels.executiveSummary[r]}>
              <div className="divide-y divide-[#F5EFE7]">
                {labels.executiveText[r].map((text, idx) => (
                  <p
                    key={idx}
                    className={`py-4 leading-relaxed text-base sm:text-[17px] ${
                      idx === 0
                        ? "pt-0 font-semibold text-[#1d1d1f]"
                        : idx === 2
                        ? "pb-0 font-semibold text-[#B8865F]"
                        : "text-[#4d4d4d]"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </SectionCard>
          </FadeUp>

          {/* Building Overview & Unit divisions */}
          <FadeUp>
            <SectionCard icon={Building2} title={labels.buildingOverview[r]}>
              {/* Timeline Graphic */}
              <div className="mb-6 p-4 sm:p-6 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]">
                <p className="text-[10px] font-bold text-[#8B6F47] mb-5 uppercase tracking-widest">
                  {isArabic ? "الجدول الزمني للعقد" : "Contract Timeline"}
                </p>
                
                <div className="relative">
                  <div className="timeline-line" />
                  <div className="flex justify-between relative z-10">
                    {[
                      {
                        date: isArabic ? "مايو 2025" : "May 2025",
                        label: isArabic ? "بداية العقد" : "Contract Start",
                        color: "bg-emerald-500",
                      },
                      {
                        date: isArabic ? "أكتوبر 2025" : "Oct 2025",
                        label: isArabic ? "ذروة الإشغال" : "Peak Occupancy",
                        color: "bg-[#C89565]",
                      },
                      {
                        date: isArabic ? "أبريل 2026" : "Apr 2026",
                        label: isArabic ? "هذا التقرير" : "This Report",
                        color: "bg-[#B8865F]",
                      },
                      {
                        date: isArabic ? "مايو 2026" : "May 2026",
                        label: isArabic ? "انتهاء العقد" : "Contract End",
                        color: "bg-amber-500",
                      },
                    ].map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                        <div className={`w-4 h-4 rounded-full ${step.color} ring-4 ring-white shadow-md`} />
                        <p className="text-[10px] font-bold text-[#1d1d1f] text-center leading-tight">
                          {step.label}
                        </p>
                        <p className="text-[9px] text-[#8B6F47] text-center">{step.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Grid of building details */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="kpi-card col-span-2 text-start">
                  <p className="text-[9px] font-bold text-[#8B6F47] uppercase tracking-widest mb-1">
                    {isArabic ? "اسم المشروع" : "Project Name"}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#1d1d1f]">
                    {buildingDetails.buildingName[r]}
                  </p>
                </div>

                {[
                  { label: { en: "Asset Type", ar: "نوع الأصل" }, val: buildingDetails.assetType[r] },
                  { label: { en: "Total Units", ar: "إجمالي الوحدات" }, val: buildingDetails.totalUnits },
                  { label: { en: "Contract Start", ar: "بداية العقد" }, val: buildingDetails.contractStart[r] },
                  { label: { en: "Contract End", ar: "انتهاء العقد" }, val: buildingDetails.contractEnd[r] },
                ].map((item, idx) => (
                  <div key={idx} className="kpi-card text-start">
                    <p className="text-[9px] font-bold text-[#8B6F47] uppercase tracking-widest mb-1">
                      {item.label[r]}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#1d1d1f]">{item.val}</p>
                  </div>
                ))}

                <div className="kpi-card col-span-2 text-start">
                  <p className="text-[9px] font-bold text-[#8B6F47] uppercase tracking-widest mb-1">
                    {isArabic ? "الموقع" : "Location"}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#1d1d1f]">
                    {buildingDetails.location[r]}
                  </p>
                </div>
              </div>

              {/* Unit Floor Plan Division mapping */}
              <div className="mt-6">
                <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
                  {isArabic ? "توزيع الوحدات حسب الطابق" : "Unit Division by Floor"}
                </p>
                <UnitDivision isArabic={isArabic} />
              </div>
            </SectionCard>
          </FadeUp>

          {/* Property Gallery */}
          <FadeUp>
            <SectionCard icon={Building2} title={isArabic ? "معرض الصور" : "Property Gallery"}>
              <PropertyGallery isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Occupancy Performance */}
          <FadeUp>
            <SectionCard icon={ChartColumn} title={labels.occupancyTitle[r]}>
              <OccupancyPerformance isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Revenue Performance */}
          <FadeUp>
            <SectionCard icon={ChartColumn} title={labels.revenueTitle[r]}>
              <RevenuePerformance isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Marketing Efforts */}
          <FadeUp>
            <SectionCard icon={Megaphone} title={labels.marketingTitle[r]}>
              <MarketingEfforts isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Operational Challenges */}
          <FadeUp>
            <SectionCard icon={Wrench} title={labels.challengesTitle[r]}>
              <OperationalChallenges isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Operating expenses / Our investments */}
          <FadeUp>
            <SectionCard icon={DollarSign} title={labels.ourInvestment[r]}>
              <p className="text-[#4d4d4d] leading-relaxed text-sm sm:text-base mb-5">
                {labels.ourInvestmentIntro[r]}
              </p>
              <OperatingExpenses isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Highlights Summary */}
          <FadeUp>
            <SectionCard icon={Lightbulb} title={labels.insights[r]}>
              <div className="space-y-3">
                {highlightsData.map(({ category, bg, border, dot, label, items }) => (
                  <div
                    key={category.en}
                    className={`p-5 rounded-2xl border bg-gradient-to-br ${bg} ${border}`}
                  >
                    <p className={`text-[10px] font-black uppercase tracking-widest mb-3 ${label}`}>
                      {category[r]}
                    </p>
                    <ul className="space-y-2.5">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2d2d2d]">
                          <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                          <span className="leading-relaxed">{item[r]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>
          </FadeUp>

          {/* Renewal Proposal */}
          <FadeUp>
            <SectionCard icon={Handshake} title={labels.contractProposal[r]} accent={true}>
              <ContractRenewalProposal isArabic={isArabic} />
            </SectionCard>
          </FadeUp>

          {/* Closing Message Card */}
          <FadeUp>
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1a1208 0%, #2d1f0e 40%, #3d2b12 100%)",
              }}
            >
              {/* Graphic Rings */}
              <div
                className="absolute top-0 end-0 w-72 h-72 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #C89565, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute bottom-0 start-0 w-48 h-48 rounded-full opacity-15 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #B8865F, transparent 70%)",
                  transform: "translate(-30%, 30%)",
                }}
              />
              {/* Repeating lines background */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg, #C89565 0px, #C89565 1px, transparent 1px, transparent 8px)",
                }}
              />

              <div className="relative p-7 sm:p-14">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-bold text-white/90 tracking-tight section-title"
                    style={{ borderColor: "rgba(200,149,101,0.6)" }}
                  >
                    {labels.closing[r]}
                  </h2>
                </div>

                <div className="space-y-6">
                  {labels.closingText[r].map((text, idx) => (
                    <p
                      key={idx}
                      className={`leading-relaxed ${
                        idx === 0
                          ? "text-lg sm:text-xl font-semibold text-white"
                          : idx === labels.closingText[r].length - 1
                          ? "text-base sm:text-lg font-bold text-[#C89565]"
                          : "text-base sm:text-lg text-white/70"
                      }`}
                    >
                      {text}
                    </p>
                  ))}
                </div>

                {/* Closing signature */}
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <img src={logoUrl} alt="Mathwaa" className="w-7 h-7 object-contain opacity-80" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#C89565]">
                      {isArabic ? "فريق الإيرادات، مثوى" : "Revenue Team, Mathwaa"}
                    </p>
                    <p className="text-[10px] text-white/40 mt-0.5">
                      {buildingDetails.reportDate[r]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Footer Branding */}
          <FadeUp>
            <div className="flex flex-col items-center gap-3 py-10 border-t border-[#EDE5DC]/50 text-center">
              <img src={logoUrl} alt="Mathwaa" className="w-8 h-8 object-contain opacity-40" />
              <p className="text-[11px] text-[#C8B89A] max-w-xs leading-relaxed">
                {isArabic
                  ? "هذا التقرير سري ومُعدٌّ حصرياً لصاحب العقار. جميع الحقوق محفوظة لمثوى."
                  : "This report is confidential and prepared exclusively for the property owner. All rights reserved © Mathwaa."}
              </p>
              <span className="text-[9px] text-[#C8B89A]/60 font-bold tracking-[0.25em] uppercase">
                {buildingDetails.reportDate[r]}
              </span>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
