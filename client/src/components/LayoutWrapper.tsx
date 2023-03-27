import React from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "../styles/Layout";

const LayoutWrapper = () => {
  return (
    <Styled.LayoutWrapper>
      <Outlet />
    </Styled.LayoutWrapper>
  );
};

export default LayoutWrapper;
