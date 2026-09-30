import { uploadPage } from "../../core/configs.js";
import express from "express";
import { addPage, getElementTypes, getPages, deletePage } from "./admin.page.controller.js";
const router = express.Router();
router.post("/", uploadPage.array('images', 10), addPage);
router.get("/", getPages);
router.post("/delete", deletePage);
router.get("/element/types", getElementTypes);
export default router;
//# sourceMappingURL=admin.page.routes.js.map