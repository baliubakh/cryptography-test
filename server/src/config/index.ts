import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  db: {
    connectionString: process.env.PG_CONNECTION_STRING,
  },
};
