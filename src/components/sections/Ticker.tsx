import { BRANDS } from "@/lib/data";

const items = [...BRANDS, "Pharma Raw Materials", ...BRANDS, "Lab Chemicals", ...BRANDS, "Glassware & HPLC", ...BRANDS, "Excipients"];

export default function Ticker() {
  return (
    <div className="border-y border-[#dce8fb] py-3 overflow-hidden bg-white">
      <div className="flex gap-12 animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#4a5568]">
            <span style={{ color: i % 2 === 0 ? "#0a75fa" : "#f41d27" }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}