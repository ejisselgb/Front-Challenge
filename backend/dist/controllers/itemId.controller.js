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
        while (_) try {
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
exports.getItemId = void 0;
var api_1 = require("../utils/api");
var common_1 = require("../common");
exports.getItemId = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var baseurl, url, urlDescription, _a, id, title, price, currency_id, pictures, condition, free_shipping, sold_quantity, category_id, plain_text, urlCategory, path_from_root, categories;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                baseurl = common_1.UrlServices("" + process.env.ENDPOINT).items;
                url = "" + baseurl + req.params.id;
                urlDescription = common_1.UrlServices(url + "/").description;
                return [4 /*yield*/, api_1.getApi(url)];
            case 1:
                _a = _b.sent(), id = _a.id, title = _a.title, price = _a.price, currency_id = _a.currency_id, pictures = _a.pictures, condition = _a.condition, free_shipping = _a.shipping.free_shipping, sold_quantity = _a.sold_quantity, category_id = _a.category_id;
                return [4 /*yield*/, api_1.getApi(urlDescription)];
            case 2:
                plain_text = (_b.sent()).plain_text;
                urlCategory = common_1.UrlServices(process.env.ENDPOINT).category;
                return [4 /*yield*/, api_1.getApi("" + urlCategory + category_id)];
            case 3:
                path_from_root = (_b.sent()).path_from_root;
                categories = path_from_root.map(function (value) { return value.name; });
                res.send({
                    author: common_1.author,
                    categories: categories,
                    item: {
                        id: id,
                        title: title,
                        price: {
                            currency: currency_id,
                            amount: price,
                            decimals: 3,
                        },
                        picture: pictures[0].url,
                        condition: condition,
                        free_shipping: free_shipping,
                        sold_quantity: sold_quantity,
                        description: plain_text,
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
