import { Router } from "express";
import {
  userRegister,
  userLogin,
  userLoggout,
  userProfile,
} from "../controller/user.controller";

const router = Router();

router.route("/register").post(userRegister);
router.route("/login").post(userLogin);
router.route("/logout").post(userLoggout);
router.route("/profile").get(userProfile);

export default router;
