"use client";

import PreLoader from "@/components/PreLoader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcomer from "@/components/Welcomer";
import Projects from "@/components/Projects";
import Farewell from "@/components/Farewell";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <PreLoader />
      <Navigation />
      <main>
        <Hero />
        <Welcomer />
        <Projects />
        <Farewell />
        <Reviews />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}