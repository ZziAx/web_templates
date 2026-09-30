import express from "express";
import { getOrders } from "./admin.order.controller.js";
const router = express.Router();
router.get("/", getOrders);
export default router;
//# sourceMappingURL=admin.order.routes.js.map