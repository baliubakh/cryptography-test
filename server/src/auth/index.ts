import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
} from "passport-jwt";
import { config } from "../config";
import { userRepository } from "../repositories/userRepository";

const auth = (passport: any) => {
  const { TOKEN_SECRET: secret } = config;
  if (secret) {
    const opts: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
    };

    passport.use(
      new JwtStrategy(opts, (jwt_payload, done) => {
        userRepository
          .getUserByUsername(jwt_payload.username)
          .then((data) => {
            if (data.length === 0) {
              return done("Not Found", false);
            } else {
              done(null, data[0]);
            }
          })
          .catch(() => done(null, false));
      })
    );
  }
};

export default auth;
