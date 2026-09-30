import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { uploadProduct, uploadFolder, uploadPage } from "./multerSettings";
const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadFolder)); // make files accessible
export { prisma, uploadProduct, uploadPage, app };
//# sourceMappingURL=configs.js.map