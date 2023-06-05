import styled from "styled-components";

export const OtherProjectContainer = styled.div`
  background: #000;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  text-align: center;
  padding-top: 30px;
`;

export const OtherProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  border-style: solid;
  border-color: #f3f3f3;
  border-top-right-radius: 50px 50px;
  margin: 30px;
  width: 300px;
  height: 340px;
  transition: transform 0.3s ease-in-out;
  flex: 0 0 calc(50% - 60px);

  @media screen and (max-width: 480px) {
    width: 80%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
export const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Img = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const Heading = styled.h4`
  color: #fff;
  font-size: 24px;
  margin: 10px;
`;

export const Description = styled.p`
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin: 15px;
`;
