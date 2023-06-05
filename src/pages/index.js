import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import Footer from "../components/Footer";
import ContactMeSection from "../components/ContactMeSection";
import OtherSection from "../components/OtherSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const skillSectionRef = useRef(null);
  const infoSectionRef = useRef(null);
  const contactMeSectionRef = useRef(null);
  const otherSectionRef = useRef(null);

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
        otherSectionRef={otherSectionRef}
      />
      <Navbar
        toggle={toggle}
        projectSectionRef={projectSectionRef}
        skillSectionRef={skillSectionRef}
        infoSectionRef={infoSectionRef}
        contactMeSectionRef={contactMeSectionRef}
        otherSectionRef={otherSectionRef}
      />
      <HeroSection />
      <ProjectSection ref={projectSectionRef} />
      <SkillSection ref={skillSectionRef} />
      <InfoSection ref={infoSectionRef} />
      <ContactMeSection ref={contactMeSectionRef} />
      <OtherSection ref={otherSectionRef} />
      <Footer />
    </>
  );
};

export default Home;
