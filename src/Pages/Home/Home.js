import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
