import db from "../db";
import { ICryptography } from "../types/cryptographyTypes";

class CryptographyRepository {
  async getCryptographyByUserId(user_id: number) {
    return await db.query(
      `SELECT * FROM cryptography WHERE user_id=${user_id}`
    );
  }

  async addCryptography(cryptographyData: ICryptography) {
    const { user_id, encrypted, cipher, cipher_key, decrypted } =
      cryptographyData;
    return await db.query(
      `INSERT INTO cryptography(
	      user_id,
	      encrypted,
        cipher,
        cipher_key,
        decrypted
      )
      VALUES ('${user_id}', '${encrypted}', '${cipher}', '${cipher_key}', '${decrypted}')`
    );
  }
}

export const cryptographyRepository = new CryptographyRepository();
