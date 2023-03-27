import React from "react";
import { AuthModalWrapper } from "../styles/auth.styled";

interface IAuthModal {
  children: React.ReactNode;
}

const AuthModal = ({ children }: IAuthModal) => {
  return <AuthModalWrapper>{children}</AuthModalWrapper>;
};

export default AuthModal;
