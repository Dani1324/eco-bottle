import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Research from "@/components/Research/Research";
import ValueProposition from "@/components/ValueProposition/ValueProposition";
import Distribution from "@/components/Distribution/Distribution";
import Communication from "@/components/Communication/Communication";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Research />
        <ValueProposition />
        <Distribution />
        <Communication />
      </main>
      <Footer />
    </>
  );
}
