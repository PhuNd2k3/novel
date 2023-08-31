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
exports.NovelController = void 0;
var novel_service_1 = require("../../services/novels/novel.service");
var httpStatusCode_config_1 = require("../../configs/httpStatusCode.config");
var NovelController = /** @class */ (function () {
    function NovelController() {
    }
    NovelController.prototype.createNovel = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, trans_id, author, composed_year, novel_name, novel_description, novel_photo_url, chapter, chapter_content, chapter_name, data, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, trans_id = _a.trans_id, author = _a.author, composed_year = _a.composed_year, novel_name = _a.novel_name, novel_description = _a.novel_description, novel_photo_url = _a.novel_photo_url, chapter = _a.chapter, chapter_content = _a.chapter_content, chapter_name = _a.chapter_name;
                        return [4 /*yield*/, novel_service_1.novelService.createNovel({
                                trans_id: trans_id,
                                author: author,
                                composed_year: composed_year,
                                novel_name: novel_name,
                                novel_photo_url: novel_photo_url,
                                novel_description: novel_description,
                                chapter: chapter,
                                chapter_content: chapter_content,
                                chapter_name: chapter_name,
                            })];
                    case 1:
                        data = _b.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_1 = _b.sent();
                        return [2 /*return*/, res.status(500).json({
                                statusCode: 500,
                                message: error_1,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.createChapterContent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, novel_id, chapter, chapter_content, chapter_name, data, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.body, novel_id = _a.novel_id, chapter = _a.chapter, chapter_content = _a.chapter_content, chapter_name = _a.chapter_name;
                        return [4 /*yield*/, novel_service_1.novelService.createChapterNovel({
                                novel_id: novel_id,
                                chapter: chapter,
                                chapter_content: chapter_content,
                                chapter_name: chapter_name,
                            })];
                    case 1:
                        data = _b.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_2 = _b.sent();
                        return [2 /*return*/, res.status(httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                                statusCode: httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
                                message: "Internal Server Error",
                                error: error_2,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.deleteChapterNovel = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, chapter, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        chapter = req.body.chapter;
                        return [4 /*yield*/, novel_service_1.novelService.deleteChapterNovel(Number(novel_id), Number(chapter))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, res.status(httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                                statusCode: httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
                                message: "Internal Server Error",
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.deleteNovelById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        return [4 /*yield*/, novel_service_1.novelService.deleteNovelById(Number(novel_id))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, res.status(httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                                statusCode: httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
                                message: "Internal Server Error",
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.listNovelByStars = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.listNovelByStars()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, res.status(httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                                statusCode: httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
                                message: "Internal Server Error",
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.listNovelByViews = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.listNovelByViews()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, res.status(httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                                statusCode: httpStatusCode_config_1.HttpStatusCode.INTERNAL_SERVER_ERROR,
                                message: "Internal Server Error",
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_name, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_name = req.query.novel_name;
                        return [4 /*yield*/, novel_service_1.novelService.getNovelByName(novel_name)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_7 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelByGenre = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var genre_id, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        genre_id = req.params.genre_id;
                        return [4 /*yield*/, novel_service_1.novelService.getNovelByGenre(genre_id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_8 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_8 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        return [4 /*yield*/, novel_service_1.novelService.getNovelById(novel_id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_9 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_9 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelByTranslator = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var translator_id, data, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        translator_id = req.params.translator_id;
                        return [4 /*yield*/, novel_service_1.novelService.getNovelByTranslator(translator_id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_10 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_10 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelChapterContent = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, novel_id, chapter, data, error_11;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, novel_id = _a.novel_id, chapter = _a.chapter;
                        return [4 /*yield*/, novel_service_1.novelService.getNovelChapterContent(novel_id, chapter)];
                    case 1:
                        data = _b.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_11 = _b.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_11 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getChaptersByNovelId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, data, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        return [4 /*yield*/, novel_service_1.novelService.getChaptersByNovelId(Number(novel_id))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_12 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_12 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelByTopView = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.getNovelByTopView()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_13 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_13 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getAllNovel = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.getAllNovel()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_14 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_14 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getNovelOrderByName = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.getNovelOrderByName()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_15 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_15 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getAllGenre = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, novel_service_1.novelService.getAllGenre()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_16 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_16 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getGenresByNovelId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, data, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        return [4 /*yield*/, novel_service_1.novelService.getGenresByNovelId(Number(novel_id))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_17 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_17 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.feedbackNovel = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, novel_id, user_id, _b, feedback, star, payload, data, error_18;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _a = req.params, novel_id = _a.novel_id, user_id = _a.user_id;
                        _b = req.body, feedback = _b.feedback, star = _b.star;
                        payload = {
                            novel_id: Number(novel_id),
                            user_id: Number(user_id),
                            feedback: feedback,
                            star: star,
                        };
                        return [4 /*yield*/, novel_service_1.novelService.feedbackNovel(payload)];
                    case 1:
                        data = _c.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_18 = _c.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_18 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    NovelController.prototype.getFeedbackByNovelId = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, data, error_19;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        novel_id = req.params.novel_id;
                        return [4 /*yield*/, novel_service_1.novelService.getFeedbackByNovelId(Number(novel_id))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, res.status(data.statusCode).json(data)];
                    case 2:
                        error_19 = _a.sent();
                        return [2 /*return*/, res.status(500).json({ error: error_19 })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return NovelController;
}());
exports.NovelController = NovelController;
