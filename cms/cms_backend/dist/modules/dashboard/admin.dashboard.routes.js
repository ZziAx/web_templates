import express from "express";
import { getDashboard } from "./admin.dashboard.controller.js";
const router = express.Router();
router.get("/", getDashboard);
export default router;
//# sourceMappingURL=admin.dashboard.routes.js.map