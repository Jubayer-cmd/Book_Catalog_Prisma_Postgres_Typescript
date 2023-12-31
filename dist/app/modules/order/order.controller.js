"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const order_service_1 = require("./order.service");
// create
const createOrder = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = __rest(req.body, []);
    const { userId } = req.user;
    const result = yield order_service_1.OrderService.createOrderService(orderData, userId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Order created successfully",
        data: result,
    });
}));
// getorder
const getOrders = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { userId } = req.user;
    let result;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) === "admin") {
        result = yield order_service_1.OrderService.getAllOrders();
    }
    else {
        result = yield order_service_1.OrderService.getOrdersByUser(userId);
    }
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Orders retrieved successfully",
        data: result,
    });
}));
// getorderId
const getOrdersbyId = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, role } = req.user;
    const { orderId } = req.params;
    const result = yield order_service_1.OrderService.getOrdersByIdService(userId, role, orderId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Order fetched successfully",
        data: result,
    });
}));
exports.OrderController = {
    createOrder,
    getOrders,
    getOrdersbyId,
};
