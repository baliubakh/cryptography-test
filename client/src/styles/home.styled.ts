import styled from "styled-components";
import { themes } from "./themes";

export const HomePageWrapper = styled.main`
  padding-top: 40px;
  width: 90%;
  margin: auto;
`;

export const HeaderWrapper = styled.h2`
  text-align: center;
  font-size: 42px;
`;

export const HelpInputsWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;

  & button {
    max-width: 300px;
  }
`;

export const EncryptedDataWrapper = styled.section`
  margin-top: 30px;
`;

export const EncryptedItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 30px 20px;
  border-bottom: 3px dashed ${themes.colors.mediumGrey};

  @media ${themes.media.maxMobile} {
    flex-direction: column;
    row-gap: 30px;
  }
`;

export const EncryptedText = styled.p`
  margin: 0;
`;
export const DecryptButtonWrapper = styled.div``;
