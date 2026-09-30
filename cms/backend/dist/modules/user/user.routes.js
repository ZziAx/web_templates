import express from "express";
import { getTableUsers } from "./user.controller.js";
const router = express.Router();
router.get("/", getTableUsers);
export default router;
//# sourceMappingURL=user.routes.js.map