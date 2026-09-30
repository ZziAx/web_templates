import { uploadProduct } from "../../core/configs.js";
import { ProductService } from "./product.service.js";
import { UserService } from "../user/user.service.js";
import express from "express";
import { mapRegisterUserDTOToPrismaInput } from "../user/user.mapper.js";
import {
  addProducts,
  deleteProducts,
  editProduct,
  getProudcts,
  getProductInfo
} from "./admin.product.controller.js";

const router = express.Router();

router.post("/", uploadProduct.array('images', 10), addProducts);

router.post("/delete", deleteProducts);

router.get("/:id/info", getProductInfo);

router.patch("/:id/edit", editProduct);

router.get("/", getProudcts);

router.get("/date", ProductService.getProductsByDate);

export default router;
