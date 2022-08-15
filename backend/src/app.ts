import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import path from "path";
import fs from "fs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const path_front = path.join("..", "frontend", "build");

app.use("/api/", routes);

app.use(express.json());
app.use(express.static(path_front));

app.get("/*", (req, res) => {
  const index = path.resolve(path_front, "index.html");
  fs.readFile(index, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error to searching the SPA");
    }
    return res.send(data);
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
