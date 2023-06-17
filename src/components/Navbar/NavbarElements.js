import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  opacity: ${(props) => (props.scrollPosition > 0 ? 0.1 : 1)};
  transition: opacity 0.3s ease-in-out;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const ImgWrap = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: auto;
  max-width: 180px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: auto;
  font-size: 1.3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #088f8f;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 1.4rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.8s, color 0.8s, transform 0.8s;

  &:hover {
    transform: scale(1.1);
    background: #088f8f;
    color: #fff;
  }
`;
