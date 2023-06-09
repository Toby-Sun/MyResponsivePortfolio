import React from 'react';
import ProfilePic from '../../images/profilePic.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Heading,
  Paragraph,
  ImgWrap,
  Img,
  Icon,
  IconLink,
  IconText,
} from './infoElements';

const InfoSection = React.forwardRef((_props, ref) => {
  return (
    <>
      <section ref={ref}>
        <InfoContainer>
          <InfoWrapper>
            <ImgWrap>
              <Img src={ProfilePic} />
            </ImgWrap>
            <TextWrapper>
              <Heading>About Me</Heading>
              <Icon>
                <IconLink
                  href="https://github.com/Toby-Sun"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>GitHub</IconText>
                  <GitHubIcon />
                </IconLink>
                <IconLink
                  href="https://www.linkedin.com/in/tobysun/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconText>LinkedIn</IconText>
                  <LinkedInIcon />
                </IconLink>
              </Icon>
              <Paragraph>
                As a recent software development graduate, I am passionate about
                coding and eager to explore and learn new skills. I have
                completed projects using a variety of programming languages and
                technologies, including React.js, Next.js, TypeScript, Python,
                and MySQL, among others. I am excited to apply my knowledge to
                real-world problems, embark on my career in web and software
                development, and contribute to dynamic and impactful projects.
              </Paragraph>
            </TextWrapper>
          </InfoWrapper>
        </InfoContainer>
      </section>
    </>
  );
});

export default InfoSection;
