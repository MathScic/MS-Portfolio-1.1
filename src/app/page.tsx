import { Suspense } from "react";
import Apropos from "./components/Apropos";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import ContactSection from "./components/ContactSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TimeLine from "./components/TimeLine";
import PricingSection from "./components/PricingSection";

export default function Page() {
  return (
    <main className="w-full mx-auto">
      <Banner />
      <Apropos />
      <Skills />
      <TimeLine />
      <Suspense>
        <Projects />
      </Suspense>
      <PricingSection />
      <ContactSection />
    </main>
  );
}
