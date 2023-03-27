import * as yup from "yup";
import { homePageDropdownOptions } from "../constants";

export const HomeFormSchema = (cipher: string) => {
  return {
    decrypted: yup
      .string()
      .min(1, "Text must be at least 1 letter")
      .required("Required"),
    cipher: yup
      .string()
      .oneOf(
        homePageDropdownOptions,
        `Please select only ${homePageDropdownOptions.join(", ")}`
      )
      .required("Required"),
    cipher_key:
      cipher === "caesar"
        ? yup
            .number()
            .min(1, "Min value is 1")
            .max(26, "Max value is 26")
            .required("Enter shift key")
        : yup.string().required("Enter a key"),
  };
};

export const HomeFormValidatorSchema = (cipher: string) =>
  yup.object().shape(HomeFormSchema(cipher));
