import { prisma } from "../../core/configs";
import FilterUtill from "../../filters/filterUtil";
import { ProductService } from "../product/product.service";

class OrderService {
  static async getOrders(req: any, res: any) {
    const filter = FilterUtill.use(prisma.orders);

    var _oorders = await filter.findMany({
      query: req.query,
      res: res,
      select: {
        id: true,
        items: true,
        createdAt: true,
        state: true,
      },
    });

    const orders = _oorders.data;
    
    const _orders:any = [];
     for(var o = 0;o<orders.length;o++) {
const order = orders[o];
      const mapItems = async () => {
        var detailedItems: any = [];

        for (var i = 0; i < order.items.length; i++) {
          const item = order.items[i];
          const product = await ProductService.getProductInfoById(
            item.productId,
          );
          const _item = Object.assign({}, item, { product: product });
          detailedItems.push(_item);
        }

        return detailedItems;
      };


     const _order =  await mapItems();
    

     _orders.push(..._order);
     
    };

    // console.log("order l is ", orders);
    return _orders;
  }
}

export default OrderService;
