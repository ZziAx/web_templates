// product.mapper.js
export function toPublicProductDTO(product) {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
    };
}
// AdminTableProductDTO
export function toAdminProductDTO(product) {
    return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        status: product.status,
        createdAt: product.createdAt
    };
}
export function toAdminEditProductDTO(product) {
    return {
        name: product.name,
        description: product.description,
        price: product.price,
        status: product.status,
        stock: product.stock
    };
}
export function toAdminProductTableDTO(product) {
    return {
        id: product.id,
        product: { name: product.name,
            images: product.images
        },
        description: { value: product.description },
        price: { value: product.price },
        stock: { value: product.stock },
        status: { value: product.status },
        createdAt: { value: product.createdAt }
    };
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
//# sourceMappingURL=product.mapper.js.map