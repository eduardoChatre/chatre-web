import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Differentiators } from "@/components/Differentiators";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Solutions } from "@/components/Solutions";
import { UseCases } from "@/components/UseCases";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Solutions />
        <Process />
        <UseCases />
        <Differentiators />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
