import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import Footer from "../components/Footer";
import ContactMeSection from "../components/ContactMeSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  const contactMeSectionRef = useRef(null);

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
        contactMeSectionRef={contactMeSectionRef}
      />
      <Navbar
        toggle={toggle}
        projectSectionRef={projectSectionRef}
        skillSectionRef={skillSectionRef}
        infoSectionRef={infoSectionRef}
        contactMeSectionRef={contactMeSectionRef}
      />
      <HeroSection />
      <ProjectSection ref={projectSectionRef} />
      <SkillSection ref={skillSectionRef} />
      <InfoSection ref={infoSectionRef} />
      <ContactMeSection ref={contactMeSectionRef} />
      <Footer />
    </>
  );
};

export default Home;
