import React from "react";
import Navbar from "@/components/skarr/Navbar";
import Hero from "@/components/skarr/Hero";
import Games from "@/components/skarr/Games";
import Blog from "@/components/skarr/Blog";
import About from "@/components/skarr/About";
import Enlist from "@/components/skarr/Enlist";
import Footer from "@/components/skarr/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-14">
      <Hero />
      <Games />
      <Blog />
      <About />
      <Enlist />
      <Footer />
      <Navbar />
    </div>
  );
}
