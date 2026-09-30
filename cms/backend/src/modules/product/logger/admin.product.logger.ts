import { prisma } from "../../../core/configs";
import { PRODUCT_VIEWS } from "../../logs/logs.constants";
import { logService_AddProductView,getLogService_AddProductView } from "./admin.product.logger.service";


export async function logAddProductView(id:any){return logService_AddProductView(id)};
export async function getLogAddProductView(id:any){return getLogService_AddProductView(id)};
