"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const common_1 = require("../../../interface/common");
const auth_1 = __importDefault(require("../../middleware/auth"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/orders/create-order", (0, auth_1.default)(common_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.createOrder);
router.get("/orders", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN, common_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getOrders);
router.get("/orders/:orderId", (0, auth_1.default)(common_1.ENUM_USER_ROLE.ADMIN, common_1.ENUM_USER_ROLE.CUSTOMER), order_controller_1.OrderController.getOrdersbyId);
exports.OrderRoutes = router;
