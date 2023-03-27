import styled from "styled-components";
import { textDecoraionAnimation } from "./common.styled";
import { themes } from "./themes";

export const HeaderContainer = styled.div`
  width: 100%;
  border: 0.5px solid #878787;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  padding: 15px 80px;
  height: 100px;
  font-size: 20px;
  font-weight: ${themes.font.weight.semiBold};
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${themes.media.maxTabletPortrait} {
    font-size: 16px;
  }

  @media ${themes.media.maxMobile} {
    padding-inline: 40px;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const NavItem = styled.li`
  margin: 0 20px;
  transition: all 0.3s;
  position: relative;

  a {
    font-weight: ${themes.font.weight.semiBold};
    text-decoration: none;
    color: ${themes.colors.primary};
    ${textDecoraionAnimation}
  }

  @media ${themes.media.maxMobile} {
    width: 100%;
    padding-block: 10px;
    list-style-type: none;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    & a {
      font-size: 30px;
    }
  }
`;

export const LogoutWrapper = styled.div`
  display: flex;
`;

export const UserName = styled.div`
  & span {
    color: ${themes.colors.mediumGrey};
  }
`;

export const LogoutLink = styled.div`
  cursor: pointer;
  ${textDecoraionAnimation}
`;

export const WebMenu = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  & a {
    color: ${themes.colors.primary};
    text-decoration: none;
    ${textDecoraionAnimation}
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    color: ${themes.colors.primary};
    text-decoration: none;
    ${textDecoraionAnimation}
  }
`;

export const BurgerMenu = styled.div`
  height: 26px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  & div {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: ${themes.colors.primary};
  }

  & :nth-child(1) {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  & :nth-child(2) {
    transition: transform 0.2s ease-in-out;
  }

  & :nth-child(3) {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  &.open {
    & :nth-child(1) {
      transform: rotate(45deg);
    }

    & :nth-child(2) {
      transform: scaleY(0);
    }

    & :nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`;

export const BurgerModalWrapper = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: calc(100vh - 100px);
  top: 100px;
  left: 0;
  transform: translateX(100vw);
  background-color: ${themes.colors.secondary};
  transition: transform 0.5s;

  &.open {
    transform: translateX(0);
  }
`;

export const LogoWrapper = styled.div`
  width: 75px;
  height: 75px;
`;
