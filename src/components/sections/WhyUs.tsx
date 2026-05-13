import { WHY_US } from "@/lib/data";

const CARD_STYLES = [
  { card: "hover:border-[#0a75fa]/30 hover:shadow-blue-50",  iconBg: "bg-[rgba(10,117,250,0.08)] border-[#dce8fb]", iconColor: "text-[#0a75fa]" },
  { card: "hover:border-[#f41d27]/30 hover:shadow-red-50",   iconBg: "bg-[rgba(244,29,39,0.06)]  border-[#dce8fb]", iconColor: "text-[#f41d27]" },
  { card: "hover:border-[#f41d27]/30 hover:shadow-red-50",   iconBg: "bg-[rgba(244,29,39,0.06)]  border-[#dce8fb]", iconColor: "text-[#f41d27]" },
  { card: "hover:border-[#0a75fa]/30 hover:shadow-blue-50",  iconBg: "bg-[rgba(10,117,250,0.08)] border-[#dce8fb]", iconColor: "text-[#0a75fa]" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628] leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}>
              Pakistan&apos;s Trusted{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #0a75fa, #f41d27)" }}>
                Scientific Supplier
              </span>
            </h2>
            <p className="text-[#4a5568] leading-relaxed mb-8">
              Since 2017, S.S Enterprise has been the preferred procurement partner for pharmaceutical
              companies, research institutions, and cosmetics manufacturers across Pakistan.
            </p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm tracking-wider uppercase rounded-xl transition-all duration-200 hover:brightness-110 bg-[#0a75fa]"
              style={{ boxShadow: "0 4px 20px rgba(10,117,250,0.3)" }}>
              Start a Partnership <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => {
              const s = CARD_STYLES[i];
              return (
                <div key={i}
                  className={`bg-white border border-[#dce8fb] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${s.card}`}>
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center text-lg font-bold mb-4 ${s.iconBg} ${s.iconColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-[#0a1628] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{item.description}</p>
                    {item.title === "Global Brands" && (
                      <p className="text-[#94a3b8] text-xs mt-2 italic">
                        * Products sourced through authorised channels
                      </p>
                    )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}