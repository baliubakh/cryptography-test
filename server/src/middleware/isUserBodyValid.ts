import { NextFunction, Request, Response } from "express";
import { userSchema } from "../joi/userBodyValidator";

export const isUserBodyValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  const { error } = userSchema.validate({ username, password });

  if (error) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }
  next();
};
