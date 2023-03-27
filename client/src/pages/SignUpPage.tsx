import { Formik, Form, FormikHelpers } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/AuthButton";
import Input from "../components/Input";
import AuthModal from "../components/AuthModal";
import { initialSignUpData, signUpInputData } from "../constants";
import { authService } from "../services/authService";
import {
  AuthBackground,
  AuthBackgroundWrapper,
  AuthSubtitle,
  AuthTitle,
  ErrorText,
  HelperTextLink,
  HelpText,
  SignUpWrapper,
} from "../styles/auth.styled";
import { ISignUpData } from "../types/auth.types";
import { SignupSchema } from "../validators/SignUpValidator";

const SignInPage = () => {
  const [error, setError] = useState();
  const navigation = useNavigate();
  const handleSubmit = (
    values: ISignUpData,
    { resetForm }: FormikHelpers<ISignUpData>
  ) => {
    authService
      .signup(values)
      .then(() => navigation("/signin"))
      .catch((err) => setError(err.message));
    resetForm();
  };

  return (
    <SignUpWrapper>
      <AuthModal>
        <AuthTitle>{signUpInputData.title}</AuthTitle>
        <AuthSubtitle>{signUpInputData.subtitle}</AuthSubtitle>
        <Formik
          initialValues={initialSignUpData}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
        >
          {({ errors }) => (
            <Form>
              {signUpInputData.inputs.map((inputData) => (
                <Input
                  key={inputData.id}
                  type={inputData.type}
                  name={inputData.name}
                  title={inputData.title}
                  placeholder={inputData.placeholder}
                  error={errors[inputData.name as keyof ISignUpData]}
                />
              ))}
              <AuthButton type="submit" title="Register" />
              <HelpText>
                Already have an Account?{" "}
                <HelperTextLink to="/signin">Log in</HelperTextLink>
              </HelpText>
              {error && <ErrorText>{error}</ErrorText>}
            </Form>
          )}
        </Formik>
      </AuthModal>
      <AuthBackgroundWrapper>
        <AuthBackground src="/images/team.png" alt="auth background" />
      </AuthBackgroundWrapper>
    </SignUpWrapper>
  );
};

export default SignInPage;
