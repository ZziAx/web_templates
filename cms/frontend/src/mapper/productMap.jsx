export function fromProduct(product) {
  return {
    id: product.id,
    uri: product.uri,
    name: product.name,
    price: product.price,
    image: product.image,
  };
}
