"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.env = process.env;
        this.DB_CONFIG = {
            host: this.env.DB_HOST,
            port: Number(this.env.DB_PORT),
            database: this.env.DB_NAME,
            user: this.env.DB_USER,
            password: this.env.DB_PASSWORD,
        };
        this.SECRET_KEY_ACCESS_TOKEN = this.env
            .SECRET_KEY_ACCESS_TOKEN;
        this.EXPIRES_ACCESS_TOKEN = 60 * 60 * 24; // 24h
        this.EXPIRES_REFRESH_TOKEN = 60 * 60 * 24 * 3;
        this.SECRET_KEY_REFRESH_TOKEN = this.env
            .SECRET_KEY_REFRESH_TOKEN;
    }
    ConfigService.prototype.getDbConfig = function () {
        return this.DB_CONFIG;
    };
    ConfigService.prototype.getSecretKeyAccessToken = function () {
        return this.SECRET_KEY_ACCESS_TOKEN;
    };
    ConfigService.prototype.getSecretKeyRefreshToken = function () {
        return this.SECRET_KEY_REFRESH_TOKEN;
    };
    ConfigService.prototype.getExpiresInAccessToken = function () {
        return this.EXPIRES_ACCESS_TOKEN;
    };
    ConfigService.prototype.getExpiresInRefreshToken = function () {
        return this.EXPIRES_REFRESH_TOKEN;
    };
    return ConfigService;
}());
exports.ConfigService = ConfigService;
