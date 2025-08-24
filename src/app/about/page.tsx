import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import DeveloperDesk from "@/components/pages/about/DeveloperDesk";
import Marquee from "@/components/pages/about/Marquee";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pb-save">
        <DeveloperDesk />
        <Marquee />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
