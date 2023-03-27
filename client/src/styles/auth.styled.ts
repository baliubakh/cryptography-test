import { Field } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "./themes";

export const InputWrapper = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

export const InputTitle = styled.h4`
  margin-block: 0 9px;
  font-size: 16px;
  line-height: 24px;
  font-weight: ${themes.font.weight.normal};
  color: ${themes.colors.primary};
`;

export const AuthInput = styled(Field)`
  width: 100%;
  background: ${themes.colors.secondary};
  border: 0.6px solid ${themes.colors.darkGrey};
  border-radius: 6px;
  height: 59px;
  padding-left: 27px;

  &.textarea {
    resize: vertical;
    height: 140px;
    padding-top: 10px;
    padding-left: 27px;
  }

  &::placeholder {
    color: ${themes.colors.lightGrey};
    font-size: 14px;
  }
`;

export const AuthModalWrapper = styled.div`
  padding: 44px;
  width: 505px;
  background: ${themes.colors.secondary};
  border: 0.5px solid ${themes.colors.mediumGrey};
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  @media ${themes.media.maxMobile} {
    width: 470px;
  }

  @media ${themes.media.maxLowScreenMobile} {
    width: 100%;
  }
`;

export const AuthButtonElement = styled.button`
  width: 100%;
  padding: 20px;
  height: 57px;
  background-color: ${themes.colors.primary};
  border: 1px solid ${themes.colors.primary};
  border-radius: 6px;
  color: ${themes.colors.secondary};
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
    color: ${themes.colors.primary};
  }
`;

export const HelpText = styled.div`
  margin-top: 37px;
  font-size: 16px;
  font-weight: ${themes.font.weight.light};
  text-align: center;
`;

export const HelperTextLink = styled(Link)`
  color: ${themes.colors.primary};
  text-decoration: none;
  font-weight: ${themes.font.weight.semiBold};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${themes.colors.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

export const AuthTitle = styled.h2`
  font-size: 31px;
  line-height: 46px;
  color: ${themes.colors.primary};
  font-weight: ${themes.font.weight.medium};
`;

export const AuthSubtitle = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${themes.font.weight.normal};
  color: ${themes.colors.primary};
  margin-bottom: 44px;
`;

export const SignInWrapper = styled.div`
  padding-top: 170px;
  padding-left: 110px;
  min-height: 100%;
  display: flex;
  column-gap: 150px;
  align-items: center;

  @media ${themes.media.maxTabletLandScape} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 30px;
    padding-left: 0;
  }

  @media ${themes.media.maxMobile} {
    padding-top: 70px;
  }
`;

export const SignUpWrapper = styled.div`
  padding-left: 110px;
  display: flex;
  column-gap: 150px;
  align-items: center;
  height: calc(100vh - 60px);

  @media ${themes.media.maxTabletLandScape} {
    flex-direction: column;
    column-gap: 0;
    row-gap: 30px;
    padding-left: 0;
  }

  @media ${themes.media.maxMobile} {
    padding-top: 70px;
  }
`;

export const AuthBackgroundWrapper = styled.div``;

export const AuthBackground = styled.img`
  @media ${themes.media.maxLowScreenMobile} {
    width: 100%;
  }
`;

export const DropdownPreview = styled.div`
  width: 100%;
  background: ${themes.colors.secondary};
  border: 0.6px solid ${themes.colors.darkGrey};
  border-radius: 6px;
  height: 59px;
  padding-left: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  & span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
  }

  &.placeholder {
    color: ${themes.colors.lightGrey};
  }

  &.selected {
    color: ${themes.colors.primary};
  }
`;

export const DropdownArrow = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  position: relative;
  margin: 0 1rem;

  span {
    top: 0.5rem;
    position: absolute;
    width: 0.75rem;
    height: 0.1rem;
    background-color: black;
    display: inline-block;
    transition: all 0.2s ease;

    &:first-of-type {
      left: 0;
      transform: rotate(45deg);
    }

    &:last-of-type {
      right: 0;
      transform: rotate(-45deg);
    }
  }

  &.open {
    span {
      &:first-of-type {
        transform: rotate(-45deg);
      }

      &:last-of-type {
        transform: rotate(45deg);
      }
    }
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  width: 100%;

  &.hidden {
    display: none;
  }

  &.open {
    display: block;
  }
`;

export const DropdownBox = styled.div`
  max-height: 350px;
  overflow: auto;
`;

export const DropdownOption = styled.div`
  display: flex;
  align-items: center;
  padding-left: 27px;
  width: 100%;
  height: 59px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border: 0.6px solid ${themes.colors.darkGrey};
  border-radius: 6px;
  background-color: ${themes.colors.secondary};
  position: relative;
  z-index: 3;
  cursor: pointer;
  transition: background-color 0.3s;

  &.smallOptions {
    height: 32px;
  }

  &:hover {
    background-color: ${themes.colors.lightGrey};
  }

  &:first-of-type {
    border-width: 0 0.6px 0 0.6px;
  }
`;

export const AuthError = styled.div`
  font-size: 14px;
  position: absolute;
  color: ${themes.colors.error};
`;

export const ErrorText = styled.div`
  margin-top: 10px;
  padding: 20px;
  border: 3px solid ${themes.colors.error};
  background-color: ${themes.colors.errorAlert};
  border-radius: 6px;
  text-align: center;
  font-weight: ${themes.font.weight.semiBold};
`;
