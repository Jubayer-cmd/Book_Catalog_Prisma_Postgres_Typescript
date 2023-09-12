import express from "express";
import { ENUM_USER_ROLE } from "../../../interface/common";
import auth from "../../middleware/auth";
import { BookController } from "./book.controller";

const router = express.Router();

router.post(
  "/books/create-book",
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.insertIntoDB
);
router.get("/books", BookController.getBooks);
router.get("/books/:id", BookController.getUserById);
router.get("/books/:categoryId/category", BookController.getBooksbyCategory);

router.delete(
  "/books/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.deleteFromDB
);

router.patch(
  "/books/:id",
  auth(ENUM_USER_ROLE.ADMIN),
  BookController.updateIntoDB
);

export const bookRoutes = router;
