import { AdminAuthService } from "./admin.auth.service";
export async function login(req, res) {
    const admin = await AdminAuthService.login(req);
    res.json(admin);
}
//# sourceMappingURL=admin.auth.controller.js.map