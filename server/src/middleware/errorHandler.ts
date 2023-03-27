import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header("Content-Type", "application/json");

  const status = error.status || 400;
  res.status(status).send(error.message);
};
