import OrderService from "./admin.order.service";

export async function getOrders(req:any,res:any){

    const orders = await OrderService.getOrders(req,res);

    res.json(orders)

}