"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-display text-xl font-bold tracking-wide text-white group-hover:text-gold-400 transition-colors">
              {SITE.name}
            </span>
            <span className="text-[10px] tracking-[0.2em] text-gold-400 uppercase font-body">
              {SITE.tagline}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm tracking-wide transition-all duration-200 border-b-2 pb-0.5 ${
                  active === l.href
                    ? "text-gold-400 border-gold-400"
                    : "text-white/70 border-transparent hover:text-white hover:border-white/30"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 bg-gold-400 hover:bg-gold-500 text-navy-950 text-sm font-semibold rounded-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-gold-400/20"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/80 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-950/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-gold-400 transition-colors text-sm tracking-wide py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 bg-gold-400 text-navy-950 text-sm font-semibold rounded-sm text-center"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
