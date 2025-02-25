import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Work from "../components/Work";
import Footer from "../components/Footer";
import { Hero } from "../components/Hero/Hero";
import Project from "../components/Project/Project";
import Service from "../components/Service/Service";

export default function Home() {
  return (
    <Box bg="#11071F"> 
      <Navbar />
      <Box className="absolute">
        <div className="absolute inset-0 justify-center">
          <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        </div>
      </Box>
      <Hero />
      <Project />
      <Service/>
      {/* <Work /> */}
      <Footer />
    </Box>
  );
}
