import express from "express";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/categories/create-category", categoryController.insertIntoDB);
router.get("/categories", categoryController.getAllFromDb);
router.get("/categories/:id", categoryController.getUserById);
router.delete("/categories/:id", categoryController.deleteFromDB);
router.patch("/categories/:id", categoryController.updateIntoDB);

export const categoryRoutes = router;
