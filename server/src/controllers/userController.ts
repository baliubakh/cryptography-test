import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { userRepository } from "../repositories/userRepository";
import { getErrorObj, getResponseObj } from "../utils/getResponseObj";
import { jwtUtils } from "../utils/jwtUtils";

class UserController {
  async getUserById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (id) {
      const data = await await userRepository.getUserById(parseInt(id));
      if (data.length === 0) {
        res.status(400);
        return getErrorObj("Bad Request");
      } else {
        return getResponseObj(data[0]);
      }
    } else {
      res.status(400);
      return getErrorObj("Bad Request");
    }
  }

  async getUserByUsername(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;
    if (username) {
      const data = await userRepository.getUserByUsername(username);
      if (data.length === 0) {
        res.status(400);
        return getErrorObj("Bad Request");
      } else {
        return getResponseObj(data[0]);
      }
    } else {
      res.status(400);
      return getErrorObj("Bad Request");
    }
  }

  async addUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (username && password) {
        const salt = bcrypt.genSaltSync(5);
        const hash = bcrypt.hashSync(password, salt);

        userRepository.createUser({
          username,
          password: hash,
        });
        res.status(201);
        return getResponseObj("Added");
      } else {
        res.status(400);
        return getErrorObj("Bad Request");
      }
    } catch (err) {
      res.status(400);
      return getErrorObj("Bad Request");
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body;
      if (username && password) {
        const data = await userRepository.getUserByUsername(username);
        if (data.length === 0) {
          return getErrorObj("Bad Request");
        } else {
          if (bcrypt.compareSync(password, data[0].password)) {
            const token = jwtUtils.generateAccessToken(username);
            const { user_id } = data[0];
            return getResponseObj({ user_id, token });
          }
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

export const userController = new UserController();
