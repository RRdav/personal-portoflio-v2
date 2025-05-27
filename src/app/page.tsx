import Stack from "@/components/carousel/Stack";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Technologies from "@/components/technologies/Technologies";

export default function Home() {
  return (
      <main className="container flex flex-col items-center font-[family-name:var(--font-raleway)]">
        <Navbar />
        <Hero />
        {/* <Stack /> */}
        <Technologies />
      </main>
  );
}
