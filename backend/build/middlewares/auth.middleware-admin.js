"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewareAdmin = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var configService_config_1 = require("../configs/configService.config");
var configService = new configService_config_1.ConfigService();
var authMiddlewareAdmin = function (req, res, next) {
    var access_token_admin = req.cookies.access_token_admin;
    console.log(access_token_admin);
    if (!access_token_admin) {
        return res
            .status(403)
            .json({ status: 403, message: "Not access token" });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(access_token_admin, configService.getSecretKeyAccessToken());
        if (decoded) {
            res.locals.data = decoded;
        }
        return next();
    }
    catch (err) {
        return res.status(401).send({
            statusCode: 401,
            message: "Invalid Token",
            err: err,
        });
    }
};
exports.authMiddlewareAdmin = authMiddlewareAdmin;
