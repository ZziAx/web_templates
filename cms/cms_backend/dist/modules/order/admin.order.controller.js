import OrderService from "./admin.order.service";
export async function getOrders(req, res) {
    const orders = await OrderService.getOrders(req, res);
    res.json(orders);
}
//# sourceMappingURL=admin.order.controller.js.map