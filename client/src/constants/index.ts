export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong..",
}

export const initialSignInData = {
  username: "",
  password: "",
};

export const initialSignUpData = {
  username: "",
  password: "",
  check_password: "",
};

export const signInInputData = {
  title: "Sign in",
  subtitle: "Sign in your own account!",
  inputs: [
    {
      id: 1,
      title: "Username",
      type: "text",
      placeholder: "john.doe@example.com",
      name: "username",
    },
    {
      id: 2,
      title: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
    },
  ],
  button: "Login",
};

export const signUpInputData = {
  title: "Sign up",
  subtitle: "Create your own account!",
  inputs: [
    {
      id: 1,
      title: "Username",
      type: "text",
      placeholder: "john.doe@example.com",
      name: "username",
    },
    {
      id: 2,
      title: "Password",
      type: "password",
      placeholder: "Enter password",
      name: "password",
    },
    {
      id: 3,
      title: "Retype Password",
      type: "password",
      placeholder: "Re-Enter password",
      name: "check_password",
    },
  ],
  button: "Register",
};

export const homePageFormData = [
  {
    id: 1,
    title: "Yout Message",
    type: "text",
    placeholder: "Some Text",
    name: "decrypted",
  },
];

export const homePageDropdownOptions = ["caesar", "xor"];

export const cipherKeyValuesByCipher = {
  caesar: {
    title: "Caesar shift number",
    type: "number",
  },
  xor: {
    title: "XOR key",
    type: "text",
  },
};
