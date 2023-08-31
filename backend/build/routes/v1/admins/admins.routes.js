"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adminRoutes = (0, express_1.Router)();
var auth_middleware_admin_1 = require("../../../middlewares/auth.middleware-admin");
var admin_controller_1 = require("../../../controllers/admins/admin.controller");
var adminController = new admin_controller_1.AdminController();
//login account
adminRoutes.post("/admin/account/login", adminController.login);
//refresh token account
adminRoutes.get("/admin/account/refresh_token", auth_middleware_admin_1.authMiddlewareAdmin, adminController.refreshToken);
//logout
adminRoutes.post("/admin/account/logout", auth_middleware_admin_1.authMiddlewareAdmin, adminController.logout);
// get profile admin
adminRoutes.get("/admin/account/get_profile", auth_middleware_admin_1.authMiddlewareAdmin, adminController.getProfile);
exports.default = adminRoutes;
