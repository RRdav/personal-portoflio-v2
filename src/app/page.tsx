import Stack from "@/components/carousel/Stack";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Technologies from "@/components/technologies/Technologies";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-raleway)]">
      <main className="flex flex-col items-center container">
        <Navbar />
        <Hero />
        <Stack />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}
