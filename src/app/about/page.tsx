import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DeveloperDesk from "@/components/pages/about/DeveloperDesk";

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <DeveloperDesk />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
