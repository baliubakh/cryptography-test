import styled from "styled-components";
import { themes } from "./themes";

export const LayoutWrapper = styled.div`
  background-color: ${themes.colors.secondary};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media ${themes.media.minPCFullHD} {
    width: 1800px;
    margin: 0 auto;
    position: relative;
  }
`;

export const LayoutContainer = styled.div`
  background-color: ${themes.colors.secondary};
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media ${themes.media.minPCFullHD} {
    width: 1800px;
    margin: auto;
    position: relative;
  }
`;
