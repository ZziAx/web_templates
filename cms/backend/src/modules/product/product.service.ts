import { prisma, upload } from "../../core/configs.js";
import { Prisma, ProductStatus } from "@prisma/client";
import {
  toAdminProductDTO,
  toAdminProductTableDTO,
  toAdminEditProductDTO,
} from "./product.mapper.js";
import FilterUtill from "../../filters/filterUtil.js";
import { equal } from "assert";
import LogsService from "../logs/logs.service.js";
import {
  logAddProductView,
  getLogAddProductView,
} from "./logger/admin.product.logger.js";
import { PRODUCT_VIEWS } from "../logs/logs.constants.js";
import { ProductMostView_SelectFilterObject,ProductTable_SelectFilterObject } from "./product.filterObjects.js";
import multer from "multer";
import { ApplicationJson, MultiPart } from "../global/headers.js";
import MediaService from "../media/admin.media.service.js";
//  function upload(req:any, res:any){

//  };

export class ProductService {

  
  static async addProduct(req: any, res: any) {
    const contentType = req.headers["content-type"];

        const {
          name,
          description,
          price,
          stock = 1,
          uri = "",
          tags = []
        } = req.body;

        const tagArray =Array.from(JSON.parse(tags)) ;

        const tagMap:any = [];
        
        console.log("rwoueiiuower ",tagArray.map((m)=>m));
        tagArray.forEach((v)=>{
          tagMap.push({
            name:v
          });

        })
        const images = await MediaService.getManyTemplate(req.files);

       
        const body = {
          name: name,
          description: description,
          price: parseFloat(price),
          stock: stock,
          status: ProductStatus.DRAFT,
          uri: uri,
          tags:{
createMany:{
  data:[
    ...tagMap
  ]

}
          },
          creator: {
            connect: {
              id: 1,
            },
          },
          category: {
            connect: {
              id: 1,
            },
          },
          images: {
            createMany:{
              data:images 
            }
          
          },
        };

        return await prisma.product.create({
          data: body,
        });
      
    
  }

  static async deleteProduct(req: any) {
    const ids = req.body.ids;
    if (!ids) return;
    const res = await prisma.product.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return {removed:ids,count:res.count};
  }

  static async editProduct(req: any) {
    const id = Number(req.params.id);

    console.log("euworiiwre ", req);

    return await prisma.product.update({
      where: {
        id: id,
      },
      data: toAdminEditProductDTO(req.body), // updates only provided fields
    });
  }

  static async getMostViews(take: number = 5) {
    const filter = FilterUtill.use(prisma.product);

    const products = await filter.findManyByLogs({
      end: take,
      logName: PRODUCT_VIEWS,
      select: ProductMostView_SelectFilterObject,
    });

    return products;
  }

  static async getProductInfoById(id: Number) {
    return await prisma.product.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
  }
  static async getProductInfo(req: any, res: any) {
    const id = Number(req.params.id);

    const product = await this.getProductInfoById(id);

    return toAdminProductDTO(product!!);
  }

  static async getProudcts(req: any, res: any) {
    const filter = FilterUtill.use(prisma.product);

    const { query } = req;
    const { orderBy } = query;
    var products;

    if (orderBy == "mostViewed") {
      products = await filter.findManyByLogs({
        logName: PRODUCT_VIEWS,
        query: query,
        select: ProductMostView_SelectFilterObject,
        onlyExistedLog: false,
      });
    } else {
      
      products = await filter.findMany({
        query: query,
        res: res,
        select:ProductTable_SelectFilterObject
      });
    }

    
    const p = products.data.map((_p: any) => toAdminProductTableDTO(_p));

    const cols = {
      product: {
        title: "نام محصول",
        component: 0,
        width:"240px",
      },
      price: { title: "قیمت", component: 3 },
      stock: { title: "انبار", component: 1 },
      status: { title: "وضعیت", component: 2 },
    };

    return { cols: cols, rows: p,count:products.count };
  }

  static async getProductsByDate(req: any, res: any) {
    const { begin, end } = req.query;

    if (!begin || !end) {
      return res.status(400).json({ error: "Begin and end required" });
    }

    const products = await prisma.product.findMany({
      where: {
        createdAt: {
          gte: new Date(begin), // greater than or equal
          lte: new Date(end), // less than or equal
        },
      },
    });

    return products;
  }
}
