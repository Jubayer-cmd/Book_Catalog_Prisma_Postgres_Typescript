import express from "express";
import { ENUM_USER_ROLE } from "../../../interface/common";
import auth from "../../middleware/auth";
import { userController } from "./user.controller";

const router = express.Router();

router.get("/users", auth(ENUM_USER_ROLE.ADMIN), userController.getAllFromDb);
router.get(
  "/profile",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  userController.getProfile
);
router.get(
  "/users/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  userController.getUserById
);
router.delete(
  "/users/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  userController.deleteFromDB
);
router.patch(
  "/users/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  userController.updateIntoDB
);

export const userRoutes = router;
