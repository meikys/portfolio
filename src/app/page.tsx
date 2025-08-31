"use client";

import PreLoader from "@/components/PreLoader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcomer from "@/components/Welcomer";
import Projects from "@/components/Projects";
import Farewell from "@/components/Farewell";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PreLoader />
      <Navigation />
      <main className="pb-save-top pb-safe-bottom">
        <Hero />
        <Welcomer />
        <Projects />
        <Farewell />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}