import styled from "styled-components";

export const SkillContainer = styled.div`
  padding-bottom: 50px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    max-height: 2000px;
  }

  @media screen and (max-width: 480px) {
    max-height: 2000px;
  }
`;

export const SkillWrapper = styled.div`
  justify-content: center;
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
  width: 100%;
  width: 400px;
  border: solid;
  margin: 30px 30px;
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
  width: 100px;
  padding: 10px 0;
`;

export const SkillImg = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export const SkillName = styled.p`
  text-align: center;
  font-size: 16px;
`;
