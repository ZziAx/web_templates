import { prisma } from "../../../core/configs";
import { PRODUCT_VIEWS } from "../../logs/logs.constants";
export async function logService_AddProductView(id) {
    const product = await prisma.product.update({
        where: {
            id: id,
        },
        data: {
            logs: {
                create: {
                    name: PRODUCT_VIEWS,
                    value: String(id),
                },
            },
        },
    });
    return product;
}
export async function getLogService_AddProductView(id) {
    const products = await prisma.product.findMany({
        where: {
            id: id
        }
    });
    return products;
}
//# sourceMappingURL=admin.product.logger.service.js.map