import { upload } from "../../core/configs";
import { PageBuilderService } from "./admin.page.service";
import { UserService } from "../user/user.service";
import express from "express";

export async function addPage(req: any, res: any) {
  const pages = await PageBuilderService.addPage(req);
  res.json(pages);
}


export async function deletePage(req:any, res:any){
  const message = await PageBuilderService.deletePage(req);
  res.json(message);
}

export async function getElementTypes(req: any, res: any) {
  const types = await PageBuilderService.getElementTypes(req);
  res.json(types);
}



export async function getPages(req: any, res: any){
  const pages = await PageBuilderService.getPages(req);
  res.json(pages);
}