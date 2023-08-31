"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userRoutes = (0, express_1.Router)();
var user_controller_1 = require("../../../controllers/users/user.controller");
var auth_middleware_1 = require("../../../middlewares/auth.middleware");
var auth_middleware_admin_1 = require("../../../middlewares/auth.middleware-admin");
var userController = new user_controller_1.UserController();
userRoutes.post("/auth/user/login", userController.login);
userRoutes.post("/auth/user/register", userController.register);
userRoutes.post("/auth/user/logout", userController.logout);
userRoutes.get("/auth/user/get_profile", auth_middleware_1.authMiddleware, userController.getProfile);
// get translator
userRoutes.get("/users/translator/view", auth_middleware_admin_1.authMiddlewareAdmin, userController.getTranslators);
exports.default = userRoutes;
