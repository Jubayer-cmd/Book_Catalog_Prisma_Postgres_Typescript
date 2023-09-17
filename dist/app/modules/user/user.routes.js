"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const common_1 = require("../../../interface/common");
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/users", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.getAllFromDb);
router.get("/profile", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN, common_1.ENUM_USER_ROLE.CUSTOMER), user_controller_1.userController.getProfile);
router.get("/users/:id", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.getUserById);
router.delete("/users/:id", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.deleteFromDB);
router.patch("/users/:id", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN), user_controller_1.userController.updateIntoDB);
exports.userRoutes = router;
