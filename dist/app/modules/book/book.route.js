"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const common_1 = require("../../../interface/common");
const auth_1 = __importDefault(require("../../middleware/auth"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/books/create-book", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.insertIntoDB);
router.get("/books", book_controller_1.BookController.getBooks);
router.get("/books/:id", book_controller_1.BookController.getUserById);
router.get("/books/:categoryId/category", book_controller_1.BookController.getBooksbyCategory);
router.delete("/books/:id", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteFromDB);
router.patch("/books/:id", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateIntoDB);
exports.bookRoutes = router;
