"use client";

import Image from "next/image";

const clients = [
  { name: "The Searle Company Limited",           logo: "/images/clients/searle-pharma.png" },
  { name: "W. Woodward Pakistan (Pvt.) Ltd.",     logo: "/images/clients/woodwards.jpg" },
  { name: "Le Mendoza Pharmaceutical (Pvt.) Ltd.", logo: "/images/clients/le-mendoza.jpg" },
  { name: "Palpex Pharmaceuticals (Pvt.) Ltd.",   logo: "/images/clients/palpax-pharma.webp" },
  { name: "Hudson Pharma (Pvt.) Limited",         logo: "/images/clients/hudson-pharma.png" },
  { name: "Oncogen Pharma (Pvt.) Ltd.",           logo: "/images/clients/oncogene-pharma.png" },
  { name: "Platinum Pharmaceuticals (Pvt.) Ltd.", logo: "/images/clients/platinum-pharmaceutical.png" },
  { name: "Winthrox Laboratories (Pvt.) Ltd.",    logo: "/images/clients/winthrox.png" },
  { name: "Dreamworld Resort, Hotel & Golf Course", logo: "/images/clients/dream-world-resort.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="py-28 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">
            Trusted By
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Key Clients
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-3 bg-white border border-[#dce8fb] rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0a75fa]/30"
            >
              <div className="relative w-full h-14">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-all duration-300"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 18vw"
                />
              </div>
              <p className="text-[#4a5568] group-hover:text-[#0a1628] text-xs font-medium leading-snug transition-colors">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}