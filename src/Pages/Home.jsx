import React from "react";
import Expertise from "../Expertise";
import Hero from "../Hero";
import WorkCard from "../WorkCard";
import ExpertiseCard from "../ExpertiseCard";
import Navbar from "../Navbar";
import Works from "../Works";
import Footer from "../Footer";

function Home() {
  return (
    <>

      <Navbar />
      <Hero />
      <Works />


      <Expertise />
      <ExpertiseCard />
      <Footer/>
    </>
  );
}

export default Home;
