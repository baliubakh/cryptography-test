import { Request, Response } from "express";
import { getErrorObj } from "../utils/getResponseObj";
import { cryptographyRepository } from "../repositories/cryptographyRepository";
import { userRepository } from "../repositories/userRepository";
import { cipherUtils } from "../utils/cipherUtils";

class CryptographyController {
  async getCryptographyByUserId(req: Request, res: Response) {
    const { id } = req.params;
    const user_id = parseInt(id);
    if (user_id) {
      return await cryptographyRepository.getCryptographyByUserId(user_id);
    }
    res.status(400);
    return getErrorObj("Bad Request");
  }

  async addCryptography(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { cipher, cipher_key, decrypted } = req.body;
      const data = await userRepository.getUserById(parseInt(id));
      if (data[0]) {
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
          const cryptography = {
            user_id: parseInt(id),
            encrypted,
            cipher,
            cipher_key,
            decrypted,
          };
          cryptographyRepository.addCryptography(cryptography);
          res.status(201);
          return cryptography;
        } else {
          res.status(400);
          return getErrorObj("Bad Request");
        }
      } else {
        res.status(400);
        return getErrorObj("Bad Request");
      }
    } catch (err) {
      res.status(400);
      return getErrorObj("Bad Request");
    }
  }
}

export const cryptographyController = new CryptographyController();
