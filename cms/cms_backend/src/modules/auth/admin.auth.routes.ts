// import { upload } from "../../core/configs.js";
// import { ProductService } from "./product.service";
import { UserService } from "../user/user.service.js";
import express from "express";
import { mapRegisterUserDTOToPrismaInput } from "../user/user.mapper.js";
import { login } from "./admin.auth.controller.js";

const router = express.Router();

router.post("/login", login);
// router.get("/element/types", getElementTypes);

export default router;
