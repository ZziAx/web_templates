export type PublicProductDTO = {
  id: number
  name: string
  price: number
  image: string
}

export type AdminProductDTO = {
  id: number
  name: string
  description: string
  price: number
  stock: number|null
  status: string
  createdAt: Date
}


export type AdminEditProductDTO={
  name: string | undefined
  description: string | undefined
  price: number | undefined
  stock: number|null | undefined
  status: string | undefined
}
// export type AdminTableProductDTO = {
//   id: number
//   name: Map<string,any>
//   description:  Map<string,any>
//   price:  Map<string,any>
//   stock:  Map<string,any>|null
//   status:  Map<string,any>
//   createdAt:  Map<string,any>
// }