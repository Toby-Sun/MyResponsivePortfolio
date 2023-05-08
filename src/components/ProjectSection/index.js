import React from "react";
import portfolioPic from "../../images/portfolioPic.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import DemoIcon from "@material-ui/icons/OpenInNew";

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectTitle,
  ImgWrap,
  Img,
  TextWrapper,
  Heading,
  Description,
  Skills,
  Icon,
  IconLink,
  IconText,
} from "./ProjectElements";

const ProjectSection = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref}>
        <ProjectContainer>
          <ProjectTitle>Projects (Continuously Updating)</ProjectTitle>
          <ProjectWrapper>
            <ImgWrap>
              <Img src={portfolioPic} />
            </ImgWrap>
            <TextWrapper>
              <Heading>This Portfolio</Heading>
              <Description>
                A responsive portfolio website showcases a collection of my
                projects and skills in web development and design. Explore my
                work to see creative and visually appealing websites and
                applications, demonstrating my passion for delivering impactful
                digital experiences.
              </Description>
              <Skills>React.js HTML CSS JSON</Skills>
              <Icon>
                <IconLink
                  href="https://github.com/Toby-Sun/MyResponsivePortfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>Code</IconText>
                  <GitHubIcon />
                </IconLink>
                <IconLink
                  href="tobysunportfolio.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>Website</IconText>
                  <DemoIcon />
                </IconLink>
              </Icon>
            </TextWrapper>
          </ProjectWrapper>
        </ProjectContainer>
      </section>
    </>
  );
});

export default ProjectSection;
