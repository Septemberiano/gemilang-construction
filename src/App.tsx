import type { JSX } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { Commitments } from "./components/Commitments.tsx";
import { Services } from "./components/Services.tsx";
import { BeforeAfter } from "./components/BeforeAfter.tsx";
import { Projects } from "./components/Projects.tsx";
import { Process } from "./components/Process.tsx";
import { WhyUs } from "./components/WhyUs.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { FAQ } from "./components/FAQ.tsx";
import { ConsultationForm } from "./components/ConsultationForm.tsx";
import { Footer } from "./components/Footer.tsx";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp.tsx";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#222823] antialiased selection:bg-[#cb542d] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Commitments />
        <Services />
        <BeforeAfter />
        <Projects />
        <Process />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
