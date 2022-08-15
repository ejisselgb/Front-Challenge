"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../controllers");
var express_1 = require("express");
var router = express_1.Router();
router.route('/:id/description').get(controllers_1.getItemDescription);
exports.default = router;
