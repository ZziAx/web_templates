import express from "express";
import { login } from "./admin.auth.controller.js";
const router = express.Router();
router.post("/login", login);
// router.get("/element/types", getElementTypes);
export default router;
//# sourceMappingURL=admin.auth.routes.js.map