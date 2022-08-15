import { Router } from "express";
import getItems from "./getItems.route";
import getItem from "./itemId.route";

const router = Router();

router.use("/items", getItem, getItems);

export default router;
