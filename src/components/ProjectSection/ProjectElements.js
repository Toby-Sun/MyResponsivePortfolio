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
`;

export const ImgWrap = styled.div`
  flex-basis: 10%;
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
  flex-basis: 45%;
  padding-top: 14px;
  margin-left: 80px;
  position: relative;
  z-index: 1;
`;

export const TextBG = styled.div`
  position: absolute;
  top: -10%;
  left: 18%;
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-image: url(${projectBG});
  z-index: -1;
  opacity: 0.7;
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
  opacity: 0.7;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding-top: 14px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    padding-top: 14px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  color: #fff;
  line-height: 28px;
  padding: 20px 20px;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const Skills = styled.h2`
  text-align: center;
  font-size: 22px;
  padding-bottom: 20px;
  color: #fff;
  font-style: italic;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
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
  align-items: center;
  margin-right: 20px;
  text-decoration: none;
  color: #fff;
`;

export const IconText = styled.h4`
  color: #fff;
  font-size: 24px;
  margin-right: 5px;
`;
