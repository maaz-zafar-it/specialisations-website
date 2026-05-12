"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { COMPANY, STATS } from "@/lib/data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 2 + 0.5,
      dx:    (Math.random() - 0.5) * 0.3,
      dy:    (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.25 + 0.05,
      color: Math.random() > 0.5 ? "10,117,250" : "244,29,39",
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f0f6ff]">

      {/* Subtle blue radial */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,117,250,0.08), transparent)" }} />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 40% at 90% 80%, rgba(244,29,39,0.05), transparent)" }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(10,117,250,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(10,117,250,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-16">

        <div className="flex justify-center mb-8">
          <div className="relative w-24 h-24 animate-float">
            <Image src="/images/logo.png" alt="S.S Enterprise" fill className="object-contain" priority />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs tracking-[0.2em] uppercase"
          style={{ borderColor: "rgba(10,117,250,0.2)", background: "rgba(10,117,250,0.06)", color: "#0a75fa" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a75fa] animate-pulse-slow" />
          Established {COMPANY.est} · Karachi, Pakistan
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-5 text-[#0a1628]"
          style={{ fontFamily: "var(--font-display)" }}>
          {COMPANY.name}
        </h1>

        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-semibold"
          style={{ background: "linear-gradient(90deg, #0a75fa, #f41d27)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {COMPANY.slogan}
        </p>

        <p className="text-[#4a5568] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {COMPANY.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a href="#contact"
            className="px-9 py-3.5 text-white font-semibold text-sm tracking-wider uppercase rounded-lg transition-all duration-200 hover:brightness-110 bg-[#0a75fa]"
            style={{ boxShadow: "0 4px 20px rgba(10,117,250,0.35)" }}>
            Request a Quote
          </a>
          <a href="#services"
            className="px-9 py-3.5 border-2 border-[#0a75fa]/30 hover:border-[#0a75fa] text-[#0a75fa] text-sm tracking-wider uppercase rounded-lg transition-all duration-200 font-medium">
            Our Services
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {STATS.map((s, i) => (
            <div key={s.label} className="text-center bg-white rounded-2xl py-5 px-4 shadow-sm border border-[#dce8fb]">
              <div className="font-display text-4xl md:text-5xl font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: i % 2 === 0 ? "#0a75fa" : "#f41d27" }}>
                {s.value}
              </div>
              <div className="text-[#4a5568] text-xs tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#0a75fa]/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#0a75fa]/30 to-transparent" />
      </div>
    </section>
  );
}