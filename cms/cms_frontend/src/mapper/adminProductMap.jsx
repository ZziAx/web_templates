
export function fromAdminProductsDTO(products) {
    return products;
}

export function fromAdminProductDTO(product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image
  }
}