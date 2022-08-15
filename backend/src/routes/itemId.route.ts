import { getItemId } from "../controllers";
import { Router } from "express";

const router = Router();

router.route("/:id").get(getItemId);

export default router;
