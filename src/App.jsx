import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import Social from "./components/Social/Social";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <section>
        <Hero />
      </section>
      <section>
        <CardSection />
      </section>
      <section>
        <Social />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
