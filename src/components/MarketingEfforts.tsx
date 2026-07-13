import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

interface MarketingEffortsProps {
  isArabic: boolean;
}

// Helper Component for Instagram Embed/Preview (wT)
interface InstagramPreviewProps {
  url: string;
  imageId: string;
  label: string;
  sub: string;
}

function InstagramPreview({ url, imageId, label, sub }: InstagramPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://www.instagram.com/p/${imageId}/media/?size=l`;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-sm">
      <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-widest px-3 py-2 bg-[#F5EFE7]">
        {label}
      </p>
      
      <div style={{ position: "relative", paddingBottom: "100%", height: 0, background: "#111" }}>
        {isPlaying ? (
          <iframe
            src={`${url}embed/`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allow="autoplay"
            title={label}
            scrolling="no"
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", cursor: "pointer" }}
            className="flex items-center justify-center group"
          >
            <img
              src={thumbnailUrl}
              alt={label}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                if (target.nextSibling) {
                  (target.nextSibling as HTMLElement).style.display = "flex";
                }
              }}
            />
            {/* Fallback gradients if thumbnail fails */}
            <div className="hidden w-full h-full absolute inset-0 items-center justify-center bg-gradient-to-br from-pink-900/80 to-purple-900/80">
              <div className="text-center px-4">
                <p className="text-white text-xs font-bold mb-2">{label}</p>
                <p className="text-white/60 text-[10px]">{sub}</p>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-pink-500 ms-1 fill-pink-500" />
            </div>
            
            {/* External Link button */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-2 end-2 z-20 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-[10px] font-bold text-pink-600 shadow"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
      
      <div className="px-3 py-2 bg-[#F5EFE7]">
        <p className="text-[10px] text-[#8B6F47]">{sub}</p>
      </div>
    </div>
  );
}

// Helper Component for Google Drive Video (ST)
interface DriveVideoPreviewProps {
  fileId: string;
  label: string;
}

function DriveVideoPreview({ fileId, label }: DriveVideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-sm">
      <p className="text-[10px] font-bold text-[#8B6F47] uppercase tracking-widest px-3 py-2 bg-[#F5EFE7]">
        {label}
      </p>
      
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#111" }}>
        {isPlaying ? (
          <iframe
            src={`https://drive.google.com/file/d/${fileId}/preview`}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allow="autoplay"
            title={label}
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", cursor: "pointer" }}
            className="flex items-center justify-center group"
          >
            <img
              src={thumbnailUrl}
              alt={label}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            
            {/* Play Button Overlay */}
            <div className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 text-[#C89565] ms-1 fill-[#C89565]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function MarketingEfforts({ isArabic }: MarketingEffortsProps) {
  const langKey = isArabic ? "ar" : "en";

  const stats = [
    {
      label: { en: "Meta Ad Spend", ar: "إنفاق إعلاني ميتا" },
      value: "SAR 10,883",
      color: "from-[#1877F2] to-[#0a5ad4]",
    },
    {
      label: { en: "TikTok Ad Spend", ar: "إنفاق إعلاني تيك توك" },
      value: "SAR 3,705",
      color: "from-[#111] to-[#333]",
    },
    {
      label: { en: "Total Paid Ads", ar: "إجمالي الإعلانات المدفوعة" },
      value: "SAR 14,588",
      color: "from-[#B8865F] to-[#C89565]",
    },
    {
      label: { en: "LTR Bookings from Influencer", ar: "حجوزات LTR من المؤثر" },
      value: "3+",
      color: "from-emerald-600 to-emerald-500",
    },
  ];

  const highlights = [
    {
      en: "Influencer collaboration with a top expat content creator with 86,400 Instagram followers that directly generated 3 long-term residential bookings, some tenants still with us today.",
      ar: "تعاون مع مؤثر من كبار المغتربين لديه 86,400 متابع على انستغرام أسفر مباشرةً عن 3 حجوزات سكنية طويلة المدى، بعض المستأجرين لا يزالون معنا حتى اليوم.",
    },
    {
      en: "In-house video ad productions created by our team and distributed across Meta (Instagram and Facebook) and TikTok paid campaigns.",
      ar: "إنتاج إعلانات فيديو داخلية من فريقنا ووزّعت عبر حملات ميتا (انستغرام وفيسبوك) وتيك توك المدفوعة.",
    },
    {
      en: "Bayut listing ranked #1 for Al Aqiq furnished studios on the GCC's most popular real estate platform, ahead of all comparable competitors.",
      ar: "قائمة بيوت مصنّفة رقم 1 للاستوديوهات المفروشة في العقيق على أكبر منصة عقارية في منطقة الخليج، متقدمة على جميع المنافسين المماثلين.",
    },
    {
      en: "Static ad creatives (bilingual EN/AR) deployed across digital channels targeting both expat and Saudi audiences.",
      ar: "إعلانات ثابتة (بالعربية والإنجليزية) نُشرت عبر القنوات الرقمية مستهدفةً جمهور المغتربين والسعوديين.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg`}>
            <p className="text-xl sm:text-2xl font-black leading-tight">{stat.value}</p>
            <p className="text-[10px] font-semibold opacity-80 uppercase tracking-wide mt-1">
              {stat.label[langKey]}
            </p>
          </div>
        ))}
      </div>

      {/* Highlights List */}
      <div className="space-y-2.5">
        {highlights.map((highlight, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-3.5 sm:p-4 bg-gradient-to-r from-[#FDFBF8] to-[#F5EFE7] rounded-2xl border border-[#EDE5DC] hover:border-[#C89565]/40 transition-colors"
          >
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#B8865F] to-[#C89565] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <span className="text-white text-xs font-black">{idx + 1}</span>
            </div>
            <p className="text-sm sm:text-base text-[#2d2d2d] font-medium leading-relaxed">
              {highlight[langKey]}
            </p>
          </div>
        ))}
      </div>

      {/* Video Content Grid */}
      <div>
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
          {isArabic ? "تعاون المؤثر والإعلانات الفيديو" : "Influencer and Video Ads"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InstagramPreview
            url="https://www.instagram.com/p/DLDL-3VMGCc/"
            imageId="DLDL-3VMGCc"
            label={isArabic ? "منشور المؤثر على انستغرام" : "Influencer Instagram Post"}
            sub={`86,400 ${isArabic ? "متابع" : "followers"} · 3 ${isArabic ? "حجوزات LTR" : "LTR bookings"}`}
          />
          <InstagramPreview
            url="https://www.instagram.com/p/DW1jfsLDEU-/"
            imageId="DW1jfsLDEU-"
            label={isArabic ? "إعلان فيديو داخلي على انستغرام" : "In-House Video Ad on Instagram"}
            sub="@mathwaa_"
          />
          <DriveVideoPreview
            fileId="1cXSaQJyMWehmQKF_k5CtKBlrrCP5o69S"
            label={isArabic ? "إعلان فيديو داخلي 1" : "In-House Video Ad 1"}
          />
          <DriveVideoPreview
            fileId="1vj0kC8YN_QoQJczckKNf0bm2eF9Y_hgj"
            label={isArabic ? "إعلان فيديو داخلي 2" : "In-House Video Ad 2"}
          />
        </div>
      </div>

      {/* Static Creative Images */}
      <div>
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
          {isArabic ? "الإعلانات الثابتة (EN/AR)" : "Static Ad Creatives (EN/AR)"}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-sm">
            <img
              src="https://media.base44.com/images/public/69e77c86f851f551b6d94035/7e48ee00e_image.png"
              alt="English Ad"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#EDE5DC] shadow-sm">
            <img
              src="https://media.base44.com/images/public/69e77c86f851f551b6d94035/04d38ac6d_arabicfacebookpostv3.png"
              alt="Arabic Ad"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bayut Ranking Section */}
      <div>
        <p className="text-xs font-bold text-[#8B6F47] uppercase tracking-widest mb-3">
          {isArabic ? "الترتيب الأول على بيوت" : "Bayut #1 Ranking in Al Aqiq"}
        </p>
        <div className="rounded-2xl overflow-hidden border border-emerald-200 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border-b border-emerald-200">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-bold text-emerald-700">
              {isArabic
                ? "مثوى في المرتبة الأولى على منصة بيوت، منصة العقارات الأولى في الخليج"
                : "Mathwaa ranked #1 on Bayut, the GCC's #1 Real Estate Platform"}
            </p>
          </div>
          <img
            src="https://media.base44.com/images/public/69e77c86f851f551b6d94035/d5ed8aee7_image.png"
            alt="Bayut #1 Ranking"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-xs text-[#8B6F47] mt-2 italic text-center">
          {isArabic
            ? "* المبنى يظهر في أعلى نتائج البحث عن استوديوهات العقيق المفروشة على بيوت"
            : "* Building appears above all competitors for Al Aqiq furnished studios on Bayut"}
        </p>
      </div>
    </div>
  );
}
