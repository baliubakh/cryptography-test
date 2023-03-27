import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "../styles/header.styled";

const Header = () => {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(
    !!localStorage.getItem("ACCESS_TOKEN")
  );

  const handleLogoutClick = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/signin");
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
