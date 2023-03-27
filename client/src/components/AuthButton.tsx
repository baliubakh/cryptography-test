import React from "react";
import { AuthButtonElement } from "../styles/auth.styled";

interface IAuthButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  handleClick?: () => void;
}

const AuthButton = ({ type, title, handleClick }: IAuthButtonProps) => {
  return (
    <AuthButtonElement type={type} onClick={handleClick}>
      {title}
    </AuthButtonElement>
  );
};

export default AuthButton;
