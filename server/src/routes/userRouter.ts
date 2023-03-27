import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/userController";
import { errorHandler } from "../middleware/errorHandler";
import { isUserBodyValid } from "../middleware/isUserBodyValid";
import { trySend } from "../middleware/trySend";

const router = Router();

router.get(
  "/id/:id",
  passport.authorize("jwt", { session: false }),
  errorHandler,
  trySend(userController.getUserById)
);

router.get(
  "/username/:username",
  passport.authorize("jwt", { session: false }),
  errorHandler,

  trySend(userController.getUserByUsername)
);

router.post(
  "/login",
  isUserBodyValid,
  errorHandler,
  trySend(userController.loginUser)
);

router.post(
  "/register",
  isUserBodyValid,
  errorHandler,
  trySend(userController.addUser)
);

export const userRouter = router;
