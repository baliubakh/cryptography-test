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

export const Table = styled.table`
  margin-top: 30px;
  border-collapse: collapse;
  min-width: 700px;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableHeader = styled.th`
  border: 1px solid ${themes.colors.mediumGrey};
  padding: 8px;
`;

export const TableBody = styled.tbody`
  & tr:nth-of-type(odd) {
    background-color: ${themes.colors.lightGrey};
  }
`;

export const TableRow = styled.tr`
  margin-bottom: 20px;
  padding: 0 30px 20px;
  border-bottom: 3px dashed ${themes.colors.mediumGrey};
`;

export const TableData = styled.td`
  font-size: 24px;
  border: 1px solid ${themes.colors.mediumGrey};
  padding: 8px;
  text-align: center;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;
