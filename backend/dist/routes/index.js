"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getItems_route_1 = __importDefault(require("./getItems.route"));
var itemId_route_1 = __importDefault(require("./itemId.route"));
var router = express_1.Router();
router.use("/items", itemId_route_1.default, getItems_route_1.default);
exports.default = router;
