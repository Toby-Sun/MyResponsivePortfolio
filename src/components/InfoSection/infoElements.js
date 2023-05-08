import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #000;
`;

export const InfoWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
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
  flex-basis: 40%;

  @media screen and (max-width: 768px) {
    flex-basis: 60%;
  }
  @media screen and (max-width: 480px) {
    flex-basis: 70%;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    padding: 20px 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 28px;
  color: #fff;
  line-height: 32px;
  max-width: 720px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  padding: 16px 0;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
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
