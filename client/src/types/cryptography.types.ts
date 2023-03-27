export interface ICryptography {
  user_id: number;
  cryptography_id: number;
  cipher: "caesar" | "xor";
  cipher_key: string;
  decrypted: string;
  encrypted: string;
}

export interface ICryptographyReqBody {
  user_id: string;
  cipher: "caesar" | "xor";
  cipher_key: string;
  decrypted: string;
  encrypted: string;
}

export interface ICryptographyFormValues {
  cipher: "caesar" | "xor";
  cipher_key: string;
  decrypted: string;
}
