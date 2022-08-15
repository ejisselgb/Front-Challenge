import { Router } from "express";
import { getItems } from "../controllers";

const router = Router();

router.route("/").get(getItems);

export default router;
