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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
var auth_service_1 = require("../../services/admins/auth.service");
var AdminController = /** @class */ (function () {
    function AdminController() {
    }
    AdminController.prototype.getProfile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var admin_id, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        admin_id = res.locals.data.admin_id;
                        return [4 /*yield*/, auth_service_1.adminService.getProfileAdmin(admin_id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        err_1 = _a.sent();
                        res.status(500).json({
                            statusCode: 500,
                            message: err_1,
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdminController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, username, password, data, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, username = _a.username, password = _a.password;
                        return [4 /*yield*/, auth_service_1.adminService.loginAccount({
                                username: username,
                                password: password,
                            })];
                    case 1:
                        data = _b.sent();
                        data.statusCode === 200 &&
                            res.cookie("access_token_admin", data.data.access_token_admin, {
                                httpOnly: true,
                                maxAge: data.data.EXPIRES_ACCESS_TOKEN * 1000, // 1000 la 1 giay
                            }) &&
                            res.cookie("refresh_token_admin", data.data.refresh_token_admin, {
                                httpOnly: true,
                                maxAge: data.data.EXPIRES_REFRESH_TOKEN * 1000, // 3hrs
                            });
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        err_2 = _b.sent();
                        console.log(err_2);
                        res.status(500).json({ err: err_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdminController.prototype.refreshToken = function (req, res) {
        var refresh_token = req.cookies.refresh_token;
        if (!refresh_token) {
            res.status(403).json({
                statusCode: 403,
                message: "Refresh token not valid",
            });
        }
        try {
            var data = auth_service_1.adminService.refreshTokenService(refresh_token);
            data.statusCode === 201 &&
                res.cookie("access_token_admin", data.data.access_token, {
                    httpOnly: true,
                    maxAge: data.data.EXPIRES_ACCESS_TOKEN * 1000, // 3hrs
                });
            res.status(data.statusCode).json(data);
        }
        catch (err) {
            res.status(400).json({
                error: err,
            });
        }
    };
    AdminController.prototype.logout = function (req, res) {
        try {
            res.clearCookie("access_token_admin");
            res.clearCookie("refresh_token_admin");
            return res.status(200).json({
                statusCode: 200,
                message: "Logout successfully",
            });
        }
        catch (err) {
            return res.status(500).json({
                statusCode: 500,
                message: err,
            });
        }
    };
    return AdminController;
}());
exports.AdminController = AdminController;
