import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Required")
    .min(1, "Username must be at least 1 letter"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 letters"),
  check_password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 letters")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
