import { Form, useFormikContext } from "formik";
import React from "react";
import * as Styled from "../styles/home.styled";

import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import SubmitButton from "../components/AuthButton";
import {
  cipherKeyValuesByCipher,
  homePageDropdownOptions,
  homePageFormData,
} from "../constants";
import { ICryptographyFormValues } from "../types/cryptography.types";

interface IHomePageForm {
  setDropVal: React.Dispatch<React.SetStateAction<string>>;
  dropVal: string;
}

const HomePageForm = ({ dropVal, setDropVal }: IHomePageForm) => {
  const { errors, values } = useFormikContext<ICryptographyFormValues>();

  return (
    <Form>
      <Styled.HelpInputsWrapper>
        <Dropdown
          name="cipher"
          title="Cipher key"
          currHeader={dropVal}
          setCurrHeader={setDropVal}
          header="CAESAR"
          options={homePageDropdownOptions}
          error={errors.cipher}
        />

        <Input
          name="cipher_key"
          error={errors.cipher_key}
          {...cipherKeyValuesByCipher[values.cipher]}
        />
      </Styled.HelpInputsWrapper>
      {homePageFormData.map((inputData) => (
        <Input
          key={inputData.id}
          {...inputData}
          error={errors[inputData.name as keyof ICryptographyFormValues]}
        />
      ))}
      <Styled.ButtonWrapper>
        <SubmitButton type="submit" title="Save" />
      </Styled.ButtonWrapper>
    </Form>
  );
};

export default HomePageForm;
