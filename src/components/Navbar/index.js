import React from "react";
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
}) => {
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
      <Nav>
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
