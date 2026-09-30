import express from "express";
import cors from "cors";
import {uploadFolder } from "./multerSettings";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(uploadFolder)); // make files accessible
export {app}