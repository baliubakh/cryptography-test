import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";

import auth from "./auth";
import { config } from "./config";
import { apiRouter } from "./routes/apiRouter";

const app = express();

const { PORT } = config;
const port = PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors({ origin: "*", credentials: true }));

auth(passport);
app.use(passport.initialize());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
