"use client"
import HeroSection from "./components/heroSection";
import MouseSection from "./components/mouse";
export default function Home() {
  return (
    <main className="main relative w-screen h-screen overflow-hidden">
    <MouseSection />
    <HeroSection />
    </main>

  );
}
