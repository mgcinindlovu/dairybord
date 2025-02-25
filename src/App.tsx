import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Discover from "./components/Discover";
import About from "./components/About";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Discover />
      <About />
    </>
  );
};

export default App;
