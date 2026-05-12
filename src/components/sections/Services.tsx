import { SERVICES } from "@/lib/data";

const CARD_STYLES = [
  { section: "bg-white border-[#dce8fb] hover:border-[#0a75fa]/40 hover:shadow-blue-100", iconBg: "bg-[rgba(10,117,250,0.08)] border-[#dce8fb]", numColor: "text-[#0a75fa]" },
  { section: "bg-white border-[#dce8fb] hover:border-[#f41d27]/40 hover:shadow-red-100",  iconBg: "bg-[rgba(244,29,39,0.06)]  border-[#dce8fb]", numColor: "text-[#f41d27]" },
  { section: "bg-white border-[#dce8fb] hover:border-[#0a75fa]/40 hover:shadow-blue-100", iconBg: "bg-[rgba(10,117,250,0.08)] border-[#dce8fb]", numColor: "text-[#0a75fa]" },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]"
            style={{ fontFamily: "var(--font-display)" }}>
            Our Core Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const s = CARD_STYLES[i];
            return (
              <div key={svc.id}
                className={`group relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${s.section}`}>
                <span className="absolute top-6 right-7 font-display text-[5rem] leading-none font-bold select-none opacity-[0.04] text-[#0a1628]"
                  style={{ fontFamily: "var(--font-display)" }}>
                  0{i + 1}
                </span>
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl mb-6 ${s.iconBg}`}>
                  {svc.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0a1628] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {svc.title}
                </h3>
                <p className={`text-xs tracking-widest uppercase mb-4 font-semibold ${s.numColor}`}>{svc.subtitle}</p>
                <p className="text-[#4a5568] text-sm leading-relaxed">{svc.description}</p>
                <a href="#products"
                  className="inline-flex items-center gap-2 mt-6 text-xs tracking-wider uppercase text-[#4a5568] group-hover:text-[#0a75fa] transition-colors duration-200 font-medium">
                  View Products
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}