import * as yup from "yup";

export const SigninSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must be at least 1 letter")
    .required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be at least 8 letters"),
});
