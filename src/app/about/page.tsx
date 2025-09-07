import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import DeveloperDesk from "@/components/pages/about/DeveloperDesk";
import Marquee from "@/components/pages/about/Marquee";
import Information from "@/components/pages/about/Information";
import Quote from "@/components/pages/about/Quote";

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <DeveloperDesk />
        <Marquee />
        <Information />
        <Quote />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
