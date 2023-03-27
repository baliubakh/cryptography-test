import db from "../db";
import { IUser } from "../types/userTypes";

class UserRepository {
  async getUserById(id: number) {
    return await db.query(`SELECT * FROM users WHERE user_id=${id}`);
  }

  async getUserByUsername(username: string) {
    return await db.query(`SELECT * FROM users WHERE username='${username}'`);
  }

  async createUser(userData: IUser) {
    const { username, password } = userData;
    return await db.query(
      `INSERT INTO users(
	    username,
	    password
      )
      VALUES ('${username}', '${password}')`
    );
  }
}

export const userRepository = new UserRepository();
