import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import DeveloperDesk from "@/components/pages/about/DeveloperDesk";
import Marquee from "@/components/pages/about/Marquee";
import Information from "@/components/pages/about/Information";
import Reviews from "@/components/pages/about/Reviews";

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <DeveloperDesk />
        <Marquee />
        <Information />
        <Reviews />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
