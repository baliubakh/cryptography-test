import { Router } from "express";
import passport from "passport";
import { cryptographyController } from "../controllers/cryptographyController";
import { errorHandler } from "../middleware/errorHandler";
import { isCryptographyBodyValid } from "../middleware/isCryptographyBodyValid";
import { trySend } from "../middleware/trySend";

const router = Router();

router.get("/:id", trySend(cryptographyController.getCryptographyByUserId));

router.post(
  "/:id",
  passport.authorize("jwt", { session: false }),
  isCryptographyBodyValid,
  errorHandler,
  trySend(cryptographyController.addCryptography)
);

export const cryptographyRouter = router;
