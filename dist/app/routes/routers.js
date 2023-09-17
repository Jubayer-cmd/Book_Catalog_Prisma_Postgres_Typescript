"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const book_route_1 = require("../modules/book/book.route");
const category_route_1 = require("../modules/category/category.route");
const order_route_1 = require("../modules/order/order.route");
const user_routes_1 = require("../modules/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/",
        route: auth_route_1.authRoutes,
    },
    {
        path: "/",
        route: user_routes_1.userRoutes,
    },
    {
        path: "/",
        route: category_route_1.categoryRoutes,
    },
    {
        path: "/",
        route: book_route_1.bookRoutes,
    },
    {
        path: "/",
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
