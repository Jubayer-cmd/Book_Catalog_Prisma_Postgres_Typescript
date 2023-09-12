import express from "express";
import { ENUM_USER_ROLE } from "../../../interface/common";
import auth from "../../middleware/auth";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post(
  "/categories/create-category",
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.insertIntoDB
);
router.get("/categories", categoryController.getAllFromDb);
router.get("/categories/:id", categoryController.getUserById);
router.delete(
  "/categories/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.deleteFromDB
);
router.patch(
  "/categories/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  categoryController.updateIntoDB
);

export const categoryRoutes = router;
