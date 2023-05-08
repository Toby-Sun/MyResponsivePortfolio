import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({
  isOpen,
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
    toggle(); // Close the sidebar menu
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={() => scrollToSection(projectSectionRef)}>
            Projects
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection(skillSectionRef)}>
            Skills
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection(infoSectionRef)}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to="https://drive.google.com/file/d/1fuSJ67ZdNbd70LmhstPdUh0BbjjBMQWe/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
