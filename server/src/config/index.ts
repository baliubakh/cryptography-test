import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  db: {
    host: process.env.PG_HOST || "localhost",
    port: parseInt(process.env.PG_PORT || "5433"),
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "tolobu01",
    database: process.env.PG_DATABASE || "cryptography",
  },
};
