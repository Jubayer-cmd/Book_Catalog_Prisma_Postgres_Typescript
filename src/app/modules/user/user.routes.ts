import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/auth/signup", userController.insertIntoDB);
router.get("/users", userController.getAllFromDb);
router.get("/users/:id", userController.getUserById);
router.delete("/users/:id", userController.deleteFromDB);
router.patch("/users/:id", userController.updateIntoDB);

export const userRoutes = router;
