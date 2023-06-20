import React from 'react';
import ecommercePic from '../../images/ecommercePic.png';
import portfolioPic from '../../images/portfolioPic.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import DemoIcon from '@material-ui/icons/OpenInNew';

import {
  ProjectContainer,
  ProjectWrapper,
  ProjectTitle,
  ImgWrap,
  Img,
  TextWrapper,
  TextBG,
  TextBG2,
  Heading,
  Description,
  Skills,
  Icon,
  IconLink,
  IconText,
} from './ProjectElements';

const ProjectSection = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref}>
        <ProjectContainer>
          <ProjectTitle>Projects (continuously updating)</ProjectTitle>
          <ProjectWrapper>
            <ImgWrap>
              <a
                href="https://kalisoundbox.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Img src={ecommercePic} />
              </a>
            </ImgWrap>
            <TextWrapper>
              <TextBG />
              <Heading>Full-Stack Ecommerce Website</Heading>
              <Description>
                Welcome to Kali Soundbox online store. A fully-responsive
                website ensures a seamless browsing experience across all
                devices. With secure Stripe payment integration, you can
                conveniently choose and purchase your desired audio equipment.
                <br />
                <br />
                *Please note that this is a demonstration website, NO actual
                transactions will be processed.
              </Description>
              <Skills>
                Next.js React.js Sanity Stripe-payment HTML CSS...
              </Skills>
              <Icon>
                <IconLink
                  href="https://github.com/Toby-Sun/ecommerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>Code</IconText>
                  <GitHubIcon />
                </IconLink>
                <IconLink
                  href="https://kalisoundbox.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>Website</IconText>
                  <DemoIcon />
                </IconLink>
              </Icon>
            </TextWrapper>
          </ProjectWrapper>
          <ProjectWrapper>
            <ImgWrap>
              <a href="https://tobysunportfolio.com">
                <Img src={portfolioPic} />
              </a>
            </ImgWrap>
            <TextWrapper>
              <TextBG2 />
              <Heading>Portfolio Website</Heading>
              <Description>
                A responsive portfolio website showcases a collection of my
                projects and skills in web development and design. Explore my
                work to see creative and visually appealing websites and
                applications, demonstrating my passion for delivering impactful
                digital experiences.
              </Description>
              <Skills>React.js Node.js EmailJS HTML CSS Material-UI...</Skills>
              <Icon>
                <IconLink
                  href="https://github.com/Toby-Sun/MyResponsivePortfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>Code</IconText>
                  <GitHubIcon />
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
