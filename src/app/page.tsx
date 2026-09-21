import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { Services } from "@/components/home/Services";
import { Studio } from "@/components/home/Studio";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SelectedProjects />
        <Manifesto />
        <Studio />
        <Services />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}