import  {app}  from "./core/configs"
import adminProductRoutes from "./modules/product/admin.product.routes";
import adminAuthRoutes from "./modules/auth/admin.auth.routes";
import adminPageRoutes from "./modules/page/admin.page.routes";
import adminDashboardRoutes from "./modules/dashboard/admin.dashboard.routes";
import adminUserRoutes from "./modules/user/user.routes";
import adminOrderRoutes from "./modules/order/admin.order.routes";
import adminUiLogger from "./modules/uiDebugLogger/ui.logger.routes";

import { registerPageElements,updatePageElements } from "./modules/page/admin.page.elements";
import { regProductMock } from "./mocks/productMocks";


// regProductMock();
app.use("/api/v1/admin/dashboard/", adminDashboardRoutes);
app.use("/api/v1/admin/products/", adminProductRoutes);
app.use("/api/v1/admin/pages/", adminPageRoutes);
app.use("/api/v1/admin/auth/", adminAuthRoutes);
app.use("/api/v1/admin/users/", adminUserRoutes);
app.use("/api/v1/admin/orderes/", adminOrderRoutes);
app.use("/api/v1/admin/logs/", adminUiLogger);


registerPageElements();

// updatePageElements();

// app.listen(4000, () => console.log("Backend running on port 4000"));


app.listen(4000, '0.0.0.0',() => console.log("Backend running on port 4000"));
