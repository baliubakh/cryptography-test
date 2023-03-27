import { css } from "styled-components";
import { themes } from "./themes";

export const textDecoraionAnimation = css`
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
