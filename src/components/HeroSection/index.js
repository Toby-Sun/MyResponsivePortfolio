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
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .changeDeleteSpeed(50)
                .pauseFor(500)
                .typeString("Hi✋, here's Toby.")
                .pauseFor(300)
                .typeString('<br>')
                .typeString('A <i>Front-end</i>')
                .pauseFor(300)
                .deleteChars(9)
                .typeString('<i>Back-end</i>')
                .pauseFor(300)
                .deleteChars(8)
                .typeString(
                  '<i style="color:#088f8f;">Full Stack Developer</i>.'
                )
                .pauseFor(300)
                .typeString('<br>')
                .typeString("I'm an explorer.")
                .pauseFor(300)
                .typeString('<br>')
                .typeString('I love coding and embracing new challenges.')
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
