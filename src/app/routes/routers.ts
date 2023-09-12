import express from "express";
import { bookRoutes } from "../modules/book/book.route";
import { categoryRoutes } from "../modules/category/category.route";
import { userRoutes } from "../modules/user/user.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/",
    route: categoryRoutes,
  },
  {
    path: "/",
    route: bookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
