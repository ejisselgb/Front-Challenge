"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author = exports.UrlServices = void 0;
exports.UrlServices = function (baseurl) {
    return {
        search: baseurl + "sites/MLA/search?q=",
        category: baseurl + "categories/",
        items: baseurl + "items/",
        description: baseurl + "description",
    };
};
exports.author = { name: "Erika", lastname: "Gutierrez Beltran" };
