import { Formik, FormikHelpers } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EncryptedItem from "../components/EncryptedItem";
import HomePageForm from "../components/HomePageForm";
import { get, showCryptography } from "../redux/slices/cryptography-slice";
import { cryptographyService } from "../services/cryptographyService";

import * as Styled from "../styles/home.styled";
import { ICryptographyFormValues } from "../types/cryptography.types";
import { cipherUtils } from "../utils/cipherUtils";
import { HomeFormValidatorSchema } from "../validators/HomeValidator";

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector(showCryptography);
  const [dropVal, setDropVal] = useState<string>("caesar");

  const initialValues: ICryptographyFormValues = {
    decrypted: "",
    cipher: "caesar",
    cipher_key: "",
  };

  const loadData = useCallback(() => {
    const id = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (id && token) {
      cryptographyService.getCryptography(id, token).then((res) => {
        if (res) dispatch(get(res));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = (
    values: ICryptographyFormValues,
    { resetForm }: FormikHelpers<ICryptographyFormValues>
  ) => {
    const user_id = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (user_id && token) {
      const { cipher, decrypted, cipher_key } = values;

      let encrypted;
      switch (cipher) {
        case "caesar":
          encrypted = cipherUtils.caesarEncrypt(
            decrypted,
            parseInt(cipher_key)
          );
          break;
        case "xor":
          encrypted = cipherUtils.xorEncrypt(decrypted, cipher_key);
      }

      if (encrypted) {
        cryptographyService
          .addCryptography(
            {
              user_id,
              cipher,
              decrypted,
              cipher_key: cipher_key + "",
              encrypted,
            },
            token
          )
          .then(() => loadData());
        resetForm();
      }
    }
  };

  return (
    <Styled.HomePageWrapper>
      <Styled.HeaderWrapper>Encrypt your message!</Styled.HeaderWrapper>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={HomeFormValidatorSchema(dropVal)}
        validateOnBlur
      >
        <HomePageForm dropVal={dropVal} setDropVal={setDropVal} />
      </Formik>
      <Styled.EncryptedDataWrapper>
        {data.map((dataEl) => (
          <EncryptedItem
            key={dataEl.cryptography_id}
            decrypted={dataEl.decrypted}
            encrypted={dataEl.encrypted}
          />
        ))}
      </Styled.EncryptedDataWrapper>
    </Styled.HomePageWrapper>
  );
};

export default HomePage;
