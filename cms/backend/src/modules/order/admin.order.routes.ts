import { upload } from "../../core/configs.js";
import  OrderService  from "./admin.order.service.js";
import express from "express";
import { mapRegisterUserDTOToPrismaInput } from "../user/user.mapper.js";
import {
 getOrders
} from "./admin.order.controller.js";

const router = express.Router();

router.get("/", getOrders);

export default router;