import * as jwt from "jsonwebtoken";
import { config } from "../config";

class JwtUtils {
  generateAccessToken(username: string) {
    const { TOKEN_SECRET: secret } = config;
    if (secret) {
      const token = jwt.sign({ username }, secret, { expiresIn: "21600s" });

      return token; // 6 hours
    }
  }
}

export const jwtUtils = new JwtUtils();
