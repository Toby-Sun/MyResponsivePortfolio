import React from 'react';
import Video from '../../videos/video.mp4';
import Typewriter from 'typewriter-effect';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("Hi 👋, I'm Toby,")
                .typeString('<br>')
                .typeString('a <i>Front-end</i>')
                .pauseFor(300)
                .deleteChars(9)
                .typeString('<i>Back-end</i>')
                .pauseFor(300)
                .deleteChars(8)
                .typeString('<i>Full Stack Developer</i> 🤖.')
                .typeString('<br>')
                .typeString('I love coding 💻 and embracing new challenges 💪.')
                .start();
            }}
          />
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
