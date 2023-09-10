import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/signup", userController.insertIntoDB);

export const userRoutes = router;
