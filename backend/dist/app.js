"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.PORT;
var path_front = path_1.default.join("..", "frontend", "build");
app.use("/api/", routes_1.default);
app.use(express_1.default.json());
app.use(express_1.default.static(path_front));
app.get("/*", function (req, res) {
    var index = path_1.default.resolve(path_front, "index.html");
    fs_1.default.readFile(index, "utf8", function (err, data) {
        if (err) {
            return res.status(500).send("Error to searching the SPA");
        }
        return res.send(data);
    });
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:" + port);
});
