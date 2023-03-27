import React from "react";
import { Outlet } from "react-router-dom";
import * as Styled from "../styles/Layout";
import Header from "./Header";

const Layout = () => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Outlet />
    </Styled.LayoutContainer>
  );
};

export default Layout;
