import Image from "next/image";
import { COMPANY } from "@/lib/data";

export default function DirectorMessage() {
  return (
    <section className="py-24 bg-white border-y border-[#dce8fb]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl border border-[#dce8fb] p-10 md:p-14 overflow-hidden bg-[#f0f6ff]"
          style={{ boxShadow: "0 4px 40px rgba(10,117,250,0.06)" }}>

          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none bg-[#0a75fa]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-[0.04] blur-3xl pointer-events-none bg-[#f41d27]" />

          <span className="absolute top-4 left-8 font-display text-[8rem] leading-none select-none opacity-[0.05] text-[#0a75fa]"
            style={{ fontFamily: "var(--font-display)" }}>&ldquo;</span>

          <div className="relative z-10 grid md:grid-cols-[160px_1fr] gap-10 items-center">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative w-20 h-20">
                <Image src="/images/logo.png" alt="S.S Enterprise" fill className="object-contain" />
              </div>
              <div>
                <p className="text-[#0a1628] font-semibold text-sm">Sales Executive</p>
                <p className="text-xs tracking-widest uppercase mt-1 text-[#0a75fa]">{COMPANY.name}</p>
              </div>
            </div>

            <div>
              <p className="text-[#4a5568] text-lg leading-relaxed mb-5">
                At S.S Enterprise, we believe science should never be compromised by supply chain uncertainty.
                Every product we deliver carries the assurance of authenticity, the confidence of certification,
                and the care of a team that genuinely understands your work.
              </p>
              <p className="text-[#4a5568] text-lg leading-relaxed">
                Whether you are scaling a pharmaceutical formulation, running critical lab analyses, or
                building a cosmetics line — we are here to make your procurement seamless, reliable,
                and built on trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}