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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var _this = this;
function fetchData(page, title) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://www.omdbapi.com/?s=".concat(title, "&page=").concat(page, "&apikey=32d7fea5"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (data.Response === "False")
                        throw new Error(data.Error);
                    return [2 /*return*/, data.Search];
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var searchButton = document.querySelector(".searchButton");
    var searchInput = document.querySelector(".searchInput");
    var moviesContainer = document.getElementById("moviesContainer");
    var nextButton = document.querySelector(".nextButton");
    var prevButton = document.querySelector(".prevButton");
    var pageNumber = 1;
    function loadData(pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!moviesContainer || !searchInput)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        moviesContainer.innerHTML = '';
                        return [4 /*yield*/, fetchData(pageNumber, searchInput.value.trim())];
                    case 2:
                        data = _a.sent();
                        data.forEach(function (movie) {
                            var card = document.createElement('div');
                            card.classList.add('movie-card');
                            card.innerHTML = "\n                    <img src=\"".concat(movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image', "\" alt=\"").concat(movie.Title, "\">\n                    <div class=\"movie-info\">\n                        <h3>").concat(movie.Title, "</h3>\n                        <p>\u0413\u043E\u0434: ").concat(movie.Year, "</p>\n                        <p>\u0422\u0438\u043F: ").concat(movie.Type, "</p>\n                    </div>\n                ");
                            moviesContainer.appendChild(card);
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        message = err_1 instanceof Error ? err_1.message : "Произошла ошибка";
                        moviesContainer.innerHTML = "<p>".concat(message, "</p>");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    if (!nextButton || !prevButton || !searchButton || !moviesContainer)
        return;
    nextButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageNumber++;
                    return [4 /*yield*/, loadData(pageNumber)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    prevButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pageNumber--;
                    return [4 /*yield*/, loadData(pageNumber)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    searchButton.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    moviesContainer.innerHTML = '';
                    return [4 /*yield*/, loadData(pageNumber)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
