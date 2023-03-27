import { Router } from "express";
import { cryptographyRouter } from "./cryptographyRouter";
import { userRouter } from "./userRouter";

const router = Router();

router.use("/users", userRouter);
router.use("/cryptography", cryptographyRouter);

export const apiRouter = router;
