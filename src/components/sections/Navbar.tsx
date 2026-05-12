"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { COMPANY } from "@/lib/data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#clients",  label: "Clients" },
  { href: "#why-us",   label: "Why Us" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
    }`} style={{ borderBottom: "1px solid #dce8fb" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <a href="#" className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0">
            <Image src="/images/logo.png" alt="S.S Enterprise Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold leading-tight text-[#0a1628]"
              style={{ fontFamily: "var(--font-display)" }}>
              {COMPANY.name}
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-[#0a75fa]">
              {COMPANY.slogan}
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-xs tracking-[0.15em] uppercase text-[#4a5568] hover:text-[#0a75fa] transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            className="ml-2 px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-semibold text-white rounded-lg transition-all duration-200 hover:brightness-110 bg-[#f41d27]"
            style={{ boxShadow: "0 4px 15px rgba(244,29,39,0.3)" }}>
            Get a Quote
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-0.5 bg-[#0a1628] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0a1628] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0a1628] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dce8fb] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm tracking-wider uppercase text-[#4a5568] hover:text-[#0a75fa]">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="text-center px-5 py-3 text-sm tracking-wider uppercase font-semibold text-white rounded-lg bg-[#f41d27]">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}