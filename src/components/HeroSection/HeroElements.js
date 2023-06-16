import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 44px;
  font-weight: 800;
  width: 700px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 400px;
  }

  @media screen and (max-width: 480px) {
    font-size: 26px;
    width: 320px;
  }
`;
