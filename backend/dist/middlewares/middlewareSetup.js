"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author = void 0;
exports.author = function (res, req, next) {
    res.author = {
        name: "Erika",
        lastname: "Gutierrez Beltran",
    };
    next();
};
