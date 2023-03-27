import { NextFunction, Request, Response } from "express";
import { cryptographySchema } from "../joi/cryptographyBodyValidator";

export const isCryptographyBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cipher, cipher_key, decrypted } = req.body;
  const { error } = cryptographySchema.validate({
    cipher,
    cipher_key,
    decrypted,
  });
  if (error) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }
  next();
};
