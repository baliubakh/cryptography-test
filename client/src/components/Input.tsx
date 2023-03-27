import React from "react";
import * as Styled from "../styles/auth.styled";

interface IAuthInput {
  title: string;
  type: string;
  placeholder?: string;
  name: string;
  error?: string | string[];
  min?: number;
  size?: string;
}

const Input = ({
  title,
  type,
  placeholder,
  name,
  error,
  min,
  size,
}: IAuthInput) => {
  //   const [passwordIsShown, setPasswordIsShown] = useState<boolean>(
  //     type === "password"
  //   );

  return (
    <Styled.InputWrapper>
      <Styled.InputTitle>{title}</Styled.InputTitle>
      <Styled.AuthInput
        component={size}
        className={size}
        min={min}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {error && (
        <Styled.AuthError>
          {Array.isArray(error) ? error.join(" ") : error}
        </Styled.AuthError>
      )}
    </Styled.InputWrapper>
  );
};

export default Input;
