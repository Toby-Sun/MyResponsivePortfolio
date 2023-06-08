import React from "react";
import {
  FrondEndSkills,
  BackEndSkills,
  DataBaseSkills,
  OtherTools,
} from "./SkillSet";
import {
  SkillContainer,
  SkillWrapper,
  SkillTopic,
  SkillBlock,
  SkillType,
  SkillImgBlock,
  SkillImgWrap,
  SkillImg,
  SkillName,
} from "./SkillElements";

const SkillSection = React.forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref}>
        <SkillContainer>
          <SkillTopic>Skills</SkillTopic>
          <SkillWrapper>
            <SkillBlock>
              <SkillType>Front-End</SkillType>
              <SkillImgBlock>
                {FrondEndSkills.map(({ id, src, title }) => (
                  <SkillImgWrap key={id}>
                    <SkillImg src={src}></SkillImg>
                    <SkillName>{title}</SkillName>
                  </SkillImgWrap>
                ))}
              </SkillImgBlock>
            </SkillBlock>

            <SkillBlock>
              <SkillType>Back-End</SkillType>
              <SkillImgBlock>
                {BackEndSkills.map(({ id, src, title }) => (
                  <SkillImgWrap key={id}>
                    <SkillImg src={src}></SkillImg>
                    <SkillName>{title}</SkillName>
                  </SkillImgWrap>
                ))}
              </SkillImgBlock>
            </SkillBlock>

            <SkillBlock>
              <SkillType>DataBase</SkillType>
              <SkillImgBlock>
                {DataBaseSkills.map(({ id, src, title }) => (
                  <SkillImgWrap key={id}>
                    <SkillImg src={src}></SkillImg>
                    <SkillName>{title}</SkillName>
                  </SkillImgWrap>
                ))}
              </SkillImgBlock>
            </SkillBlock>

            <SkillBlock>
              <SkillType>Other Tools</SkillType>
              <SkillImgBlock>
                {OtherTools.map(({ id, src, title }) => (
                  <SkillImgWrap key={id}>
                    <SkillImg src={src}></SkillImg>
                    <SkillName>{title}</SkillName>
                  </SkillImgWrap>
                ))}
              </SkillImgBlock>
            </SkillBlock>
          </SkillWrapper>
        </SkillContainer>
      </section>
    </>
  );
});

export default SkillSection;
