import Stack from "@/components/carousel/Stack";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-raleway)]">
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Navbar />
        <Hero />
        <Stack />
      </main>
    </div>
  );
}
