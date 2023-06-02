import styled from "styled-components";

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

  @media screen and (max-width: 768px) {
    flex-basis: 70%;
  }
  @media screen and (max-width: 480px) {
    flex-basis: 80%;
  }
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
  font-size: 20px;
  color: #fff;
  line-height: 28px;
  padding: 20px 80px;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;
export const Skills = styled.h2`
  text-align: center;
  font-size: 20px;
  padding-bottom: 20px;
  color: #fff;

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
