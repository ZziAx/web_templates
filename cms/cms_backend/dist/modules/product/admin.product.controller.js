import { ProductService } from "./product.service";
export async function addProducts(req, res) {
    const product = await ProductService.addProduct(req, res);
    res.json(product);
}
export async function deleteProducts(req, res) {
    const product = await ProductService.deleteProduct(req);
    res.json(product);
}
export async function editProduct(req, res) {
    const product = await ProductService.editProduct(req);
    res.json({ productId: product.id });
}
export async function getProudcts(req, res) {
    const products = await ProductService.getProudcts(req, res);
    res.json(products);
}
export async function getProductInfo(req, res) {
    const product = await ProductService.getProductInfo(req, res);
    res.json(product);
}
export async function getProudctsByate(req, res) {
    const products = await ProductService.getProudcts(req, res);
    res.json(products);
}
//# sourceMappingURL=admin.product.controller.js.map