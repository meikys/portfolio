import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import DeveloperDesk from "@/components/pages/about/DeveloperDesk";
import Marquee from "@/components/pages/about/Marquee";
import Information from "@/components/pages/about/Information";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pb-save-top pb-safe-bottom">
        <DeveloperDesk />
        <Marquee />
        <Information />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
