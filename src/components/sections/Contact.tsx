"use client";
import { useState } from "react";
import { COMPANY } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const submit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "c631b176-c050-4c93-a094-bc862c5d85c3",
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        service: form.service,
        message: form.message,
      }),
    });
    const data = await res.json();
    if (data.success) setSent(true);
    else alert("Something went wrong. Please try again.");
  } catch {
    alert("Network error. Please try again.");
  }
};

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4 font-semibold text-[#0a75fa]">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a1628]"
            style={{ fontFamily: "var(--font-display)" }}>
            Request a Quote
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase mb-1 text-[#4a5568]">Phone / WhatsApp</p>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="text-xl font-semibold text-[#0a75fa] hover:text-[#1985ff] transition-colors">
                {COMPANY.phone}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-1 text-[#4a5568]">Email</p>
              <a href={`mailto:${COMPANY.email}`} className="text-[#0a75fa] hover:text-[#1985ff] transition-colors">
                {COMPANY.email}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-1 text-[#4a5568]">Location</p>
              <p className="text-[#0a1628]">{COMPANY.address}</p>
            </div>

            <a href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in your products.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm tracking-wider uppercase font-medium transition-all duration-200 hover:brightness-110"
              style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", color: "#16a34a" }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="border border-[#dce8fb] rounded-2xl p-8 bg-[#f0f6ff]">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-[#dce8fb] bg-[#0a75fa]/10 text-[#0a75fa]">✓</div>
                <h3 className="text-[#0a1628] text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-[#4a5568]">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name",    label: "Name *",  placeholder: "Your full name", type: "text",  required: true },
                    { name: "company", label: "Company", placeholder: "Company name",   type: "text",  required: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-xs tracking-widest uppercase block mb-2 text-[#4a5568] font-medium">{f.label}</label>
                      <input name={f.name} type={f.type} required={f.required}
                        value={form[f.name as keyof typeof form]} onChange={handle}
                        placeholder={f.placeholder}
                        className="w-full border border-[#dce8fb] focus:border-[#0a75fa] rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white text-[#0a1628] placeholder:text-[#4a5568]/40"
                      />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "email", label: "Email *", placeholder: "you@company.com", type: "email", required: true },
                    { name: "phone", label: "Phone",   placeholder: "+92 3XX XXXXXXX", type: "tel",   required: false },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="text-xs tracking-widest uppercase block mb-2 text-[#4a5568] font-medium">{f.label}</label>
                      <input name={f.name} type={f.type} required={f.required}
                        value={form[f.name as keyof typeof form]} onChange={handle}
                        placeholder={f.placeholder}
                        className="w-full border border-[#dce8fb] focus:border-[#0a75fa] rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white text-[#0a1628] placeholder:text-[#4a5568]/40"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2 text-[#4a5568] font-medium">Service Required</label>
                  <select name="service" value={form.service} onChange={handle}
                    className="w-full border border-[#dce8fb] focus:border-[#0a75fa] rounded-xl px-4 py-3 text-sm outline-none transition-colors bg-white text-[#0a1628]">
                    <option value="">Select a category</option>
                    <option>Pharma &amp; Cosmetics Raw Materials</option>
                    <option>Lab Chemicals</option>
                    <option>Glassware &amp; HPLC Columns</option>
                    <option>Multiple / General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase block mb-2 text-[#4a5568] font-medium">Message *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handle}
                    placeholder="Tell us what you need..."
                    className="w-full border border-[#dce8fb] focus:border-[#0a75fa] rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none bg-white text-[#0a1628] placeholder:text-[#4a5568]/40"
                  />
                </div>
                <button type="submit"
                  className="w-full py-3.5 text-white font-semibold text-sm tracking-wider uppercase rounded-xl transition-all duration-200 hover:brightness-110 bg-[#0a75fa]"
                  style={{ boxShadow: "0 4px 20px rgba(10,117,250,0.3)" }}>
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}