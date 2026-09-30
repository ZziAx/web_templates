// product.mapper.js

import { PublicProductDTO, AdminProductDTO,AdminEditProductDTO } from "./product.dto.js"
import { Product as PrismaProduct } from "@prisma/client"

export function toPublicProductDTO(product:PrismaProduct): PublicProductDTO {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image
  }
}
// AdminTableProductDTO
export function toAdminProductDTO(product:PrismaProduct) {
   return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    status: product.status,
    createdAt: product.createdAt
  }
}

export function toAdminEditProductDTO(product:PrismaProduct):AdminEditProductDTO{
  return {
    name:product.name,
    description:product.description,
    price:product.price,
    status:product.status,
    stock:product.stock
  }

}


  export function toAdminProductTableDTO(product:PrismaProduct) {
   return {
    id: product.id,
    product: {name:product.name,

      images:product.images
    },
    description:{value:product.description} ,
    price:{value:product.price},
    stock:{value:product.stock},
    status:{value:product.status},
    createdAt: {value:product.createdAt}
  }

  
  // return {
  //   id: product.id,
  //   name: product.name,
  //   description: product.description,
  //   price: product.price,
  //   stock: product.stock,
  //   status: product.status,
  //   createdAt: product.createdAt
  // }
}

