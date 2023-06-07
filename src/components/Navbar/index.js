import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({
  toggle,
  projectSectionRef,
  skillSectionRef,
  infoSectionRef,
  contactMeSectionRef,
  otherSectionRef,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    const navbarHeight = 80;
    const sectionPosition = ref.current.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Nav scrollPosition={scrollPosition}>
        <NavbarContainer>
          <NavLogo onClick={scrollToTop}>toby.sun</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(projectSectionRef)}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(skillSectionRef)}>
                Skills
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(infoSectionRef)}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(contactMeSectionRef)}>
                Contact
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => scrollToSection(otherSectionRef)}>
                Others
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="https://drive.google.com/file/d/1fuSJ67ZdNbd70LmhstPdUh0BbjjBMQWe/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
