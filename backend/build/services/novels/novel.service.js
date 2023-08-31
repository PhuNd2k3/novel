"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.novelService = void 0;
var index_db_1 = require("../../db/index.db");
var httpStatusCode_config_1 = require("../../configs/httpStatusCode.config");
var NovelService = /** @class */ (function () {
    function NovelService() {
    }
    NovelService.prototype.createNovel = function (novel) {
        return __awaiter(this, void 0, void 0, function () {
            var trans_id, author, composed_year, novel_name, novel_photo_url, novel_description, chapter, chapter_content, chapter_name, results, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 7]);
                        trans_id = novel.trans_id, author = novel.author, composed_year = novel.composed_year, novel_name = novel.novel_name, novel_photo_url = novel.novel_photo_url, novel_description = novel.novel_description, chapter = novel.chapter, chapter_content = novel.chapter_content, chapter_name = novel.chapter_name;
                        return [4 /*yield*/, (0, index_db_1.query)("BEGIN")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, index_db_1.query)("INSERT INTO novel(trans_id, author, composed_year, novel_name, novel_description ,novel_photo_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING novel_id", [
                                trans_id,
                                author,
                                composed_year,
                                novel_name,
                                novel_description,
                                novel_photo_url,
                            ])];
                    case 2:
                        results = _a.sent();
                        return [4 /*yield*/, (0, index_db_1.query)("INSERT INTO content VALUES($1, $2, $3, $4)", [
                                results.rows[0].novel_id,
                                chapter,
                                chapter_content,
                                chapter_name,
                            ])];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, index_db_1.query)("COMMIT")];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.CREATED,
                                message: "Created novel success",
                            }];
                    case 5:
                        error_1 = _a.sent();
                        return [4 /*yield*/, (0, index_db_1.query)("ROLLBACK")];
                    case 6:
                        _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.BAD_REQUEST,
                                message: "FAILURE CREATED",
                            }];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    NovelService.prototype.createChapterNovel = function (chapterContent) {
        return __awaiter(this, void 0, void 0, function () {
            var novel_id, chapter, chapter_content, chapter_name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        novel_id = chapterContent.novel_id, chapter = chapterContent.chapter, chapter_content = chapterContent.chapter_content, chapter_name = chapterContent.chapter_name;
                        return [4 /*yield*/, (0, index_db_1.query)("INSERT INTO content VALUES($1, $2, $3, $4, now()::date)", [
                                novel_id,
                                chapter,
                                chapter_content,
                                chapter_name,
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.CREATED,
                                message: "Created Chapter Successfull",
                            }];
                }
            });
        });
    };
    NovelService.prototype.deleteChapterNovel = function (novel_id, chapter) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("DELETE FROM content WHERE novel_id = $1 and chapter = $2 RETURNING *", [novel_id, chapter])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Delete chapter successful",
                                data: results.rows[0],
                            }];
                }
            });
        });
    };
    NovelService.prototype.deleteNovelById = function (novel_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("DELETE FROM novel WHERE novel_id = $1 RETURNING *", [novel_id])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Delete novel successful",
                                data: results.rows[0],
                            }];
                }
            });
        });
    };
    NovelService.prototype.listNovelByStars = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel ORDER BY avg_star")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get novels by stars avg success",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.listNovelByViews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel ORDER BY novel_view")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get novels by novel view success",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    // search
    NovelService.prototype.getNovelByName = function (novel_name) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel WHERE novel_name ILIKE '%' || $1 || '%'", [novel_name])];
                    case 1:
                        results = _a.sent();
                        if (!results.rows.length) {
                            return [2 /*return*/, {
                                    statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                    message: "Khong co ket qua",
                                    data: results.rows,
                                }];
                        }
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel By Name Success",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getNovelByGenre = function (genre) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("select novel.* from novel\n        join with_genre using (novel_id)\n        where with_genre.genre_id = $1", [genre])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel By Genre Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getNovelById = function (novel_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT novel.*, username FROM novel JOIN users ON (novel.trans_id = users.user_id) WHERE novel.novel_id = $1", [novel_id])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel By Id Successfull",
                                data: results.rows[0],
                            }];
                }
            });
        });
    };
    NovelService.prototype.getNovelByTranslator = function (translator_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel WHERE trans_id = $1", [
                            translator_id,
                        ])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel By Translator Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getNovelChapterContent = function (novel_id, chapter) {
        return __awaiter(this, void 0, void 0, function () {
            var results, results_2, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM content WHERE novel_id = $1 AND chapter = $2", [novel_id, chapter])];
                    case 1:
                        results = _a.sent();
                        return [4 /*yield*/, (0, index_db_1.query)("SELECT CAST(count(*) as INT) number_of_chapter FROM content WHERE novel_id = $1", [novel_id])];
                    case 2:
                        results_2 = _a.sent();
                        data = __assign(__assign({}, results.rows[0]), results_2.rows[0]);
                        return [4 /*yield*/, (0, index_db_1.query)("UPDATE novel SET novel_view = novel_view + 1 WHERE novel_id = $1", [novel_id])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Successfull",
                                data: data,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getChaptersByNovelId = function (novel_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT chapter, chapter_name FROM content WHERE novel_id = $1 ORDER BY chapter", [novel_id])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getNovelByTopView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel ORDER BY novel_view DESC LIMIT 5\n        ")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Top View Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    //get all novel
    NovelService.prototype.getAllNovel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT novel.*, username FROM novel JOIN users ON users.user_id = novel.trans_id")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get All Novel Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    // get novel order by novel name
    NovelService.prototype.getNovelOrderByName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM novel ORDER BY novel_name")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Order Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    //get all genre : the loai truyen
    NovelService.prototype.getAllGenre = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT * FROM genre")];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Order Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.getGenresByNovelId = function (novel_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT genre_id, genre_name FROM genre JOIN with_genre USING(genre_id) WHERE novel_id = $1", [novel_id])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Novel Order Successfull",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    NovelService.prototype.feedbackNovel = function (feedbackData) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, novel_id, feedback, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = feedbackData.user_id, novel_id = feedbackData.novel_id, feedback = feedbackData.feedback;
                        return [4 /*yield*/, (0, index_db_1.query)("INSERT INTO read VALUES ($1, $2, $3) RETURNING *", [user_id, novel_id, feedback])];
                    case 1:
                        results = _a.sent();
                        if (!results.rows.length) {
                            return [2 /*return*/, {
                                    statusCode: httpStatusCode_config_1.HttpStatusCode.NOT_ACCEPTABLE,
                                    message: "Feedback fail",
                                }];
                        }
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.CREATED,
                                message: "Feedback Success",
                                data: results.rows[0],
                            }];
                }
            });
        });
    };
    NovelService.prototype.getFeedbackByNovelId = function (novel_id) {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, index_db_1.query)("SELECT read.*, username FROM read JOIN users USING(user_id) WHERE novel_id = $1 AND feedback IS NOT NULL", [novel_id])];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, {
                                statusCode: httpStatusCode_config_1.HttpStatusCode.OK,
                                message: "Get Feedback Success",
                                data: results.rows,
                            }];
                }
            });
        });
    };
    return NovelService;
}());
exports.novelService = new NovelService();
