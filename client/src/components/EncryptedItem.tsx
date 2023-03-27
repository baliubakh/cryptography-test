import React, { useState } from "react";
import { TableData, TableRow } from "../styles/home.styled";
import AuthButton from "./AuthButton";

interface IEncryptedDataBlock {
  cipher: string;
  encrypted: string;
  decrypted: string;
}

const EncryptedItem = ({
  cipher,
  encrypted,
  decrypted,
}: IEncryptedDataBlock) => {
  const [decryptedIsShowed, setDecryptedIsShowed] = useState<boolean>(false);

  const showDecrypted = () => {
    setDecryptedIsShowed((prev) => !prev);
  };

  return (
    <TableRow>
      <TableData>{decryptedIsShowed ? decrypted : encrypted}</TableData>
      <TableData>{cipher.toUpperCase()}</TableData>
      <TableData>
        <AuthButton
          handleClick={showDecrypted}
          type="button"
          title="Show Decrypted text!"
        />
      </TableData>
    </TableRow>
  );
};

export default EncryptedItem;
