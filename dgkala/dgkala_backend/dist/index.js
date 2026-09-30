import { app } from "./core/configs";
import adminUiLogger from "./modules/uiDebugLogger/ui.logger.routes";
app.use("/api/v1/admin/logs/", adminUiLogger);
// app.listen(4000, () => console.log("Backend running on port 4000"));
app.listen(4000, '0.0.0.0', () => console.log("Backend running on port 4000"));
//# sourceMappingURL=index.js.map