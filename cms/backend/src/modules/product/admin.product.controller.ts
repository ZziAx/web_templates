import { upload } from "../../core/configs";
import { ProductService } from "./product.service";
import { UserService } from "../user/user.service";
import express from "express";

export async function addProducts(req: any, res: any) {
  const product = await ProductService.addProduct(req,res);
  res.json(product);
}

export async function deleteProducts(req: any, res: any) {
  const product = await ProductService.deleteProduct(req);
  res.json(product);
}

export async function editProduct(req: any, res: any) {
  const product = await ProductService.editProduct(req);
  res.json({ productId: product.id });
}

export async function getProudcts(req: any, res: any) {
  
  const products = await ProductService.getProudcts(req, res);
  res.json(products);
}

export async function getProductInfo(req:any,res:any){
  
const product = await ProductService.getProductInfo(req, res);
  res.json(product);
}

export async function getProudctsByate(req: any, res: any) {
  const products = await ProductService.getProudcts(req, res);
  res.json(products);
}

