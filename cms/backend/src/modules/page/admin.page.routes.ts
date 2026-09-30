import { uploadPage } from "../../core/configs.js";
// import { ProductService } from "./product.service";
import { UserService } from "../user/user.service.js";
import express from "express";
import { mapRegisterUserDTOToPrismaInput } from "../user/user.mapper.js";
import { addPage, getElementTypes,getPages,deletePage } from "./admin.page.controller.js";

const router = express.Router();

router.post("/",uploadPage.array('images', 10), addPage);
router.get("/", getPages);
router.post("/delete", deletePage);

router.get("/element/types", getElementTypes);

export default router;
