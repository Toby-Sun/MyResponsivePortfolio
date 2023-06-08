import styled from "styled-components";

export const SkillContainer = styled.div`
  padding-bottom: 50px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    max-height: 2000px;
  }

  @media screen and (max-width: 480px) {
    max-height: 2500px;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const SkillTopic = styled.h1`
  font-size: 50px;
  text-align: center;
  padding-top: 30px;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const SkillBlock = styled.div`
  width: 300px;
  border-radius: 20px;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 1);
  margin: 30px 0px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SkillType = styled.h3`
  padding-top: 20px;
  font-size: 30px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;

export const SkillImgBlock = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-items: center;
`;
export const SkillImgWrap = styled.div`
  width: 80px;
  padding: 10px 0;
`;

export const SkillImg = styled.img`
  max-width: 100%;
`;

export const SkillName = styled.p`
  text-align: center;
  font-size: 16px;
`;
