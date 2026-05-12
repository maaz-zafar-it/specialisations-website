import Image from "next/image";
import { COMPANY, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a1628] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.png" alt="S.S Enterprise" fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}>
                  {COMPANY.name}
                </h3>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#1985ff]">{COMPANY.slogan}</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Trusted supplier of pharmaceutical raw materials, lab chemicals, and scientific equipment.
              Est. {COMPANY.est} · Karachi, Pakistan.
            </p>
          </div>

          <div>
            <h4 className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-white/40 hover:text-white text-sm transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/50 text-xs tracking-[0.25em] uppercase mb-5">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${COMPANY.phone}`} className="block text-white/40 hover:text-white transition-colors">{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="block text-[#1985ff] hover:text-white transition-colors">{COMPANY.email}</a>
              <p className="text-white/40">{COMPANY.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/20 text-xs">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <p>Designed for excellence in scientific supply.</p>
        </div>
      </div>
    </footer>
  );
}