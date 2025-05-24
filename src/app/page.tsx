import Stack from "@/components/carousel/Stack";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-raleway)]">
      <main className="flex flex-col items-center justify-between container">
        <Navbar />
        <Hero />
        <Stack />
      </main>
      <Footer />
    </div>
  );
}
