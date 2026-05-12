"use client";
import { useState } from "react";
import { SERVICES } from "@/lib/data";

export default function Products() {
  const [active, setActive]     = useState(SERVICES[0].id);
  const [expanded, setExpanded] = useState(false);

  const current = SERVICES.find((s) => s.id === active)!;
  const visible  = expanded ? current.products : current.products.slice(0, 8);

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">Product Catalogue</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]"
            style={{ fontFamily: "var(--font-display)" }}>
            Browse by Category
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          {SERVICES.map((svc, i) => (
            <button key={svc.id}
              onClick={() => { setActive(svc.id); setExpanded(false); }}
              className="px-6 py-3 rounded-xl text-sm tracking-wider uppercase transition-all duration-200 border font-medium"
              style={active === svc.id ? {
                background: i === 1 ? "#f41d27" : "#0a75fa",
                color: "#fff",
                borderColor: "transparent",
                boxShadow: i === 1 ? "0 4px 15px rgba(244,29,39,0.3)" : "0 4px 15px rgba(10,117,250,0.3)",
              } : {
                background: "#f0f6ff",
                color: "#4a5568",
                borderColor: "#dce8fb",
              }}>
              {svc.icon} {svc.id === "pharma" ? "Pharma & Cosmetics" : svc.id === "lab" ? "Lab Chemicals" : "Glassware & HPLC"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {visible.map((product, i) => (
            <div key={i}
              className="border border-[#dce8fb] hover:border-[#0a75fa]/40 rounded-xl px-4 py-3.5 text-[#4a5568] text-sm flex items-center gap-2.5 transition-all duration-200 hover:text-[#0a1628] hover:bg-[#f0f6ff] bg-white">
              <span className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: i % 2 === 0 ? "#0a75fa" : "#f41d27" }} />
              {product}
            </div>
          ))}
        </div>

        {current.products.length > 8 && (
          <div className="text-center mt-8">
            <button onClick={() => setExpanded(!expanded)}
              className="px-6 py-2.5 border border-[#dce8fb] hover:border-[#0a75fa]/40 text-[#4a5568] hover:text-[#0a75fa] text-sm tracking-wider uppercase rounded-xl transition-all duration-200">
              {expanded ? "Show Less ↑" : `Show All ${current.products.length} Products ↓`}
            </button>
          </div>
        )}

        <p className="text-center text-[#4a5568] text-sm mt-8">
          Don&apos;t see what you need?{" "}
          <a href="#contact" className="text-[#0a75fa] underline underline-offset-2 hover:text-[#1985ff]">
            Send us an enquiry
          </a>
        </p>
      </div>
    </section>
  );
}