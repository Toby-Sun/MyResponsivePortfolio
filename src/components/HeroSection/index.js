import React from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP2,
  HeroH1,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Toby Sun</HeroH1>
        <HeroP2>A Full Stack Developer with passion and persistence.</HeroP2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
