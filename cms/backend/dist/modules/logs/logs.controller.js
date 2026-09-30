import { SIGNUP, SELL, SITE_VIEWS, PRODUCT_VIEWS } from "./logs.constants";
import LogsService from "./logs.service";
export async function getDashboardLogs(req, res) {
    const signup = await LogsService.grothAndCount(SIGNUP);
    const sell = await LogsService.grothAndCount(SELL);
    const siteViews = await LogsService.grothAndCount(SITE_VIEWS);
    const productViews = await LogsService.grothAndCount(PRODUCT_VIEWS);
    return {
        signup: signup,
        sell: sell,
        siteViews: siteViews,
        productViews: productViews,
    };
}
//# sourceMappingURL=logs.controller.js.map