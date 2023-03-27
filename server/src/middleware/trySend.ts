import { NextFunction, Request, Response } from "express";

export const trySend =
  (callback: Function) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await callback(req, res);
      res.send(result);
    } catch (error) {
      next(error);
    }
  };
