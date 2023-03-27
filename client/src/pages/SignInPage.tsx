import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import Input from "../components/Input";
import AuthModal from "../components/AuthModal";
import { initialSignInData, signInInputData } from "../constants";
import { authService } from "../services/authService";
import {
  AuthBackground,
  AuthBackgroundWrapper,
  AuthSubtitle,
  AuthTitle,
  ErrorText,
  HelperTextLink,
  HelpText,
  SignInWrapper,
} from "../styles/auth.styled";
import { IAuthData } from "../types/auth.types";
import { SigninSchema } from "../validators/SignInValidator";
import { get } from "../redux/slices/user-slice";

const SignInPage = () => {
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (
    values: IAuthData,
    { resetForm }: FormikHelpers<IAuthData>
  ) => {
    authService.signin(values).then((res) => {
      if (
        res &&
        res.status === "success" &&
        res.data.token &&
        res.data.user_id
      ) {
        localStorage.setItem("ACCESS_TOKEN", res.data.token);
        localStorage.setItem("USER_ID", res.data.user_id + "");

        const { username } = values;
        const userStoreData = { username };
        dispatch(get(userStoreData));
        resetForm();
        navigation("/");
      } else {
        setError("Wrong username or password");
      }
    });
  };

  return (
    <SignInWrapper>
      <AuthModal>
        <AuthTitle>{signInInputData.title}</AuthTitle>
        <AuthSubtitle>{signInInputData.subtitle}</AuthSubtitle>
        <Formik
          initialValues={initialSignInData}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
          validateOnBlur
        >
          {({ errors }) => (
            <Form>
              {signInInputData.inputs.map((inputData) => (
                <Input
                  key={inputData.id}
                  type={inputData.type}
                  name={inputData.name}
                  title={inputData.title}
                  placeholder={inputData.placeholder}
                  error={errors[inputData.name as keyof IAuthData]}
                />
              ))}
              <AuthButton type="submit" title="Login" />

              {error && <ErrorText>{error}</ErrorText>}
              <HelpText>
                Don’t have an Account?{" "}
                <HelperTextLink to="/signup">Register</HelperTextLink>
              </HelpText>
            </Form>
          )}
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignInWrapper>
  );
};

export default SignInPage;
