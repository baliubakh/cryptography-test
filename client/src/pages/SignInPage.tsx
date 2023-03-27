import { Formik, Form, FormikHelpers } from "formik";
import React from "react";
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
  HelperTextLink,
  HelpText,
  SignInWrapper,
} from "../styles/auth.styled";
import { IAuthData } from "../types/auth.types";
import { SigninSchema } from "../validators/SignInValidator";
import { get } from "../redux/slices/user-slice";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (
    values: IAuthData,
    { resetForm }: FormikHelpers<IAuthData>
  ) => {
    authService.signin(values).then((res) => {
      if (res) {
        localStorage.setItem("ACCESS_TOKEN", res.token);

        const { username } = values;
        const userStoreData = { username };
        dispatch(get(userStoreData));
        navigation("/");
      }
    });
    resetForm();
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
