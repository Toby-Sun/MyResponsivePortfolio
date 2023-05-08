import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const infoSectionRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        projectSectionRef={projectSectionRef}
        skillSectionRef={skillSectionRef}
        infoSectionRef={infoSectionRef}
      />
      <Navbar
        toggle={toggle}
        projectSectionRef={projectSectionRef}
        skillSectionRef={skillSectionRef}
        infoSectionRef={infoSectionRef}
      />
      <HeroSection />
      <ProjectSection ref={projectSectionRef} />
      <SkillSection ref={skillSectionRef} />
      <InfoSection ref={infoSectionRef} />
      <Footer />
    </>
  );
};

export default Home;
