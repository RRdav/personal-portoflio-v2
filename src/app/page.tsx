import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-raleway)]">
      <main className="flex min-h-screen flex-col items-center justify-between p-20">
        <Navbar />
        <Hero />
        hey
      </main>
    </div>
  );
}
