import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({
  isOpen,
  toggle,
  projectSectionRef,
  skillSectionRef,
  infoSectionRef,
  contactMeSectionRef,
  otherSectionRef,
}) => {
  const scrollToSection = (ref) => {
    const navbarHeight = 80;
    const sectionPosition = ref.current.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
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
          <SidebarLink onClick={() => scrollToSection(contactMeSectionRef)}>
            Contact
          </SidebarLink>
          <SidebarLink onClick={() => scrollToSection(otherSectionRef)}>
            Others
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            to="https://drive.google.com/file/d/1Qib16xzXhPIrCFoeS3zAZNFqkeZczzIX/view?usp=sharing"
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
