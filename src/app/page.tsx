import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import DirectorMessage from "@/components/sections/DirectorMessage";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Products />
      <WhyUs />
      <DirectorMessage />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
