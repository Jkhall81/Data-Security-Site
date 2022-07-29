import React from "react";
import Cloud from "./components/Cloud/Cloud";
import Data from "./components/data/Data";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Recovery from "./components/Recovery/Recovery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Recovery />
      <Footer />
    </>
  );
}

export default App;
