import { Formik, FormikHelpers } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EncryptedItem from "../components/EncryptedItem";
import HomePageForm from "../components/HomePageForm";
import { get, showCryptography } from "../redux/slices/cryptography-slice";
import { cryptographyService } from "../services/cryptographyService";

import * as Styled from "../styles/home.styled";
import { ICryptographyFormValues } from "../types/cryptography.types";
import { cipherUtils } from "../utils/cipherUtils";
import { HomeFormValidatorSchema } from "../validators/HomeValidator";

const HomePage = () => {
  const navigation = useNavigate();

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

  useEffect(() => {
    const id = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (!(id && token)) navigation("/signin");
  }, [navigation]);

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
      <Styled.TableWrapper>
        <Styled.Table>
          <Styled.TableHead>
            <Styled.TableRow>
              <Styled.TableHeader>Text</Styled.TableHeader>
              <Styled.TableHeader>Cipher</Styled.TableHeader>
              <Styled.TableHeader>Get Original Text</Styled.TableHeader>
            </Styled.TableRow>
          </Styled.TableHead>
          <Styled.TableBody>
            {data.map((dataEl) => (
              <EncryptedItem
                key={dataEl.cryptography_id}
                cipher={dataEl.cipher}
                decrypted={dataEl.decrypted}
                encrypted={dataEl.encrypted}
              />
            ))}
          </Styled.TableBody>
        </Styled.Table>
      </Styled.TableWrapper>
    </Styled.HomePageWrapper>
  );
};

export default HomePage;
