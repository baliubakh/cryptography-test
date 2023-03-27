import Joi from "joi";

export const cryptographySchema = Joi.object({
  cipher: Joi.string().min(1).max(100).required(),
  cipher_key: Joi.string().min(1).max(100).required(),
  decrypted: Joi.string().min(1).max(100).required(),
});
