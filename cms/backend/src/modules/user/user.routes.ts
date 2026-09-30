import { upload } from "../../core/configs.js";
import { UserService } from "./user.service.js";
import express from "express";
import { mapRegisterUserDTOToPrismaInput } from "./user.mapper.js";
import {
  getTableUsers
} from "./user.controller.js";

const router = express.Router();

router.get("/",  getTableUsers);

export default router;