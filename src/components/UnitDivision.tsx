import { Pb } from "../data";

interface UnitDivisionProps {
  isArabic: boolean;
}

export function UnitDivision({ isArabic }: UnitDivisionProps) {
  const langKey = isArabic ? "ar" : "en";
  const totalUnits = Pb.reduce((sum, floor) => sum + floor.units.length, 0);
  const occupiedUnits = Pb.reduce((sum, floor) => sum + floor.units.filter((u) => u.occupied).length, 0);
  const occupancyRate = Math.round((occupiedUnits / totalUnits) * 100);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4 py-3 bg-[#F5EFE7] rounded-2xl border border-[#EDE5DC]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-[#C89565]" />
            <p className="text-xs font-semibold text-[#3d3d3d]">
              {isArabic ? "مؤجَّرة" : "Occupied"} ({occupiedUnits})
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-white border border-[#D0C8BC]" />
            <p className="text-xs font-semibold text-[#3d3d3d]">
              {isArabic ? "شاغرة" : "Vacant"} ({totalUnits - occupiedUnits})
            </p>
          </div>
        </div>
        <p className="text-sm font-black text-[#C89565]">
          {occupancyRate}% {isArabic ? "إشغال" : "Occupied"}
        </p>
      </div>

      {[...Pb].reverse().map((floor) => {
        const occupiedCount = floor.units.filter((u) => u.occupied).length;
        return (
          <div key={floor.name.en} className="rounded-2xl border border-[#EDE5DC] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-[#EDE5DC] to-[#F5EFE7]">
              <p className="text-xs font-black text-[#8B6F47] uppercase tracking-widest">
                {floor.name[langKey]}
              </p>
              <p className="text-[10px] font-bold text-[#B0A08A]">
                {occupiedCount}/{floor.units.length} {isArabic ? "وحدات" : "units"}
              </p>
            </div>
            
            <div className="p-3 bg-white">
              <div className="flex flex-wrap gap-2">
                {floor.units.map((u) => (
                  <div
                    key={u.id}
                    className="flex flex-col items-center justify-center rounded-xl border text-center transition-all"
                    style={{
                      width: 56,
                      height: 48,
                      background: u.occupied
                        ? "linear-gradient(135deg, #C89565, #B8865F)"
                        : "#FAFAF8",
                      borderColor: u.occupied ? "#B8865F" : "#E0D8CE",
                    }}
                  >
                    <p className={`text-[11px] font-bold leading-tight ${u.occupied ? "text-white" : "text-[#B0A08A]"}`}>
                      {u.id}
                    </p>
                    <p className={`text-[8px] font-semibold mt-0.5 ${u.occupied ? "text-white/70" : "text-[#C8B89A]"}`}>
                      {u.occupied ? (isArabic ? "مؤجَّرة" : "Occ") : (isArabic ? "شاغرة" : "Vac")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
