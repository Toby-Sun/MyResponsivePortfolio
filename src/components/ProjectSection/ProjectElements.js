import styled from 'styled-components';
import projectBG from '../../images/projectBg.png';
import projectBG2 from '../../images/projectBg2.png';

export const ProjectContainer = styled.div`
  background: #000;
`;

export const ProjectTitle = styled.h1`
  padding: 30px 30px 0;
  font-size: 50px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 34px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  @media screen and (max-width: 390px) {
    font-size: 20px;
  }
`;

export const ProjectWrapper = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ImgWrap = styled.div`
  flex-basis: 10%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  max-width: 600px;
  max-height: 400px;
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    max-width: 550px;
    max-height: 350px;
  }
  @media screen and (max-width: 480px) {
    max-width: 350px;
    max-height: 250px;
  }
`;

export const TextWrapper = styled.div`
  flex-basis: 40%;
  padding-top: 14px;
  margin-left: 70px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-basis: 75%;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
    flex-basis: 80%;
    margin-left: 0;
  }
`;

export const TextBG = styled.div`
  position: absolute;
  top: -10%;
  left: 15%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: url(${projectBG});
  z-index: -1;
  opacity: 0.6;

  @media screen and (max-width: 480px) {
    width: 400px;
    height: 400px;
    top: 5%;
    left: 0%;
  }

  @media screen and (max-width: 390px) {
    width: 300px;
    height: 300px;
    top: 5%;
    left: 0%;
  }
`;

export const TextBG2 = styled.div`
  position: absolute;
  top: -10%;
  left: 18%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: url(${projectBG2});
  z-index: -1;
  opacity: 0.5;

  @media screen and (max-width: 480px) {
    width: 400px;
    height: 400px;
    top: 0%;
    left: 0%;
  }

  @media screen and (max-width: 390px) {
    width: 300px;
    height: 300px;
    top: 5%;
    left: 0%;
  }
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 26px;
    padding-top: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
    padding-top: 14px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: #fff;
  line-height: 28px;
  padding: 20px 20px;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const Skills = styled.h2`
  text-align: center;
  font-size: 22px;
  padding-bottom: 20px;
  color: #fff;
  font-style: italic;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Icon = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IconLink = styled.a`
  display: flex;
  padding: 5px 15px;
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  border-radius: 15px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
    background: #088f8f;
    color: #fff;
  }
`;

export const IconText = styled.h4`
  color: #000;
  font-size: 24px;
  margin-right: 5px;
`;
