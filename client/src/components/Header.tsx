import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Styled from "../styles/header.styled";
import { showUser } from "../redux/slices/user-slice";

const Header = () => {
  const userData = useSelector(showUser);
  const [isLogined, setIsLogined] = useState(
    !!localStorage.getItem("ACCESS_TOKEN")
  );

  const handleLogoutClick = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    setIsLogined(false);
  };

  return (
    <Styled.HeaderContainer>
      <Styled.WebMenu>
        {isLogined ? (
          <Styled.LogoutWrapper>
            <Styled.LogoutLink onClick={handleLogoutClick}>
              Log out
            </Styled.LogoutLink>
          </Styled.LogoutWrapper>
        ) : (
          <Link to={"/signin"}>Sign in</Link>
        )}
      </Styled.WebMenu>
    </Styled.HeaderContainer>
  );
};

export default Header;
