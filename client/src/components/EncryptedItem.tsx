import React, { useState } from "react";
import {
  DecryptButtonWrapper,
  EncryptedItemWrapper,
  EncryptedText,
} from "../styles/home.styled";
import AuthButton from "./AuthButton";

interface IEncryptedDataBlock {
  encrypted: string;
  decrypted: string;
}

const EncryptedItem = ({ encrypted, decrypted }: IEncryptedDataBlock) => {
  const [decryptedIsShowed, setDecryptedIsShowed] = useState<boolean>(false);

  const showDecrypted = () => {
    setDecryptedIsShowed((prev) => !prev);
  };

  return (
    <EncryptedItemWrapper>
      <EncryptedText>{decryptedIsShowed ? decrypted : encrypted}</EncryptedText>
      <DecryptButtonWrapper>
        <AuthButton
          handleClick={showDecrypted}
          type="button"
          title="Show Decrypted text!"
        />
      </DecryptButtonWrapper>
    </EncryptedItemWrapper>
  );
};

export default EncryptedItem;
