"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routerV1 = (0, express_1.Router)();
var admins_routes_1 = __importDefault(require("./admins/admins.routes"));
var users_routes_1 = __importDefault(require("./users/users.routes"));
var novel_routes_1 = __importDefault(require("./novels/novel.routes"));
routerV1.use("/v1", admins_routes_1.default);
routerV1.use("/v1", users_routes_1.default);
routerV1.use("/v1", novel_routes_1.default);
exports.default = routerV1;
