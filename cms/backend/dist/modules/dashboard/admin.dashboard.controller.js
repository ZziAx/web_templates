// import { getDashboardLogs } from "../logs/logs.controller";
// export async function getDashboard(req: any, res: any) {
//   const data = await getDashboardLogs(req, res);
//   res.json(data);
// }
import { getDashboardLogs } from "../logs/logs.controller";
import OrderService from "../order/admin.order.service";
import { ProductService } from "../product/product.service";
export async function getDashboard(req, res) {
    const logs = await getDashboardLogs(req, res);
    const orders = await OrderService.getOrders(req, res);
    const mostViewsProduct = await ProductService.getMostViews(8);
    console.log('wreuiuwer', mostViewsProduct);
    res.json({ logs: {
            ...logs
        }, orders: [
            ...orders
        ],
        mostViews: [
            ...mostViewsProduct.data
        ]
    });
}
//# sourceMappingURL=admin.dashboard.controller.js.map