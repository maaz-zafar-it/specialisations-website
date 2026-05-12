import { CLIENTS } from "@/lib/data";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

const ICON_STYLES = [
  "bg-gradient-to-br from-[rgba(10,117,250,0.12)] to-[rgba(10,117,250,0.04)]",
  "bg-gradient-to-br from-[rgba(244,29,39,0.10)] to-[rgba(244,29,39,0.03)]",
];
const BORDER_HOVER = [
  "hover:border-[#0a75fa]/30",
  "hover:border-[#f41d27]/30",
];

export default function Clients() {
  return (
    <section id="clients" className="py-28 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">Trusted By</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]"
            style={{ fontFamily: "var(--font-display)" }}>
            Our Key Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CLIENTS.map((client, i) => {
            const even = i % 2;
            return (
              <div key={i}
                className={`group flex flex-col items-center gap-3 bg-white border border-[#dce8fb] rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${BORDER_HOVER[even]}`}>
                <div className={`w-14 h-14 rounded-xl border border-[#dce8fb] flex items-center justify-center ${ICON_STYLES[even]}`}>
                  <span className="font-display text-xl font-bold text-[#0a1628]/60 group-hover:text-[#0a1628] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {initials(client)}
                  </span>
                </div>
                <p className="text-[#4a5568] group-hover:text-[#0a1628] text-xs leading-snug transition-colors font-medium">
                  {client}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}