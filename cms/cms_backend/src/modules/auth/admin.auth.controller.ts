import { AdminAuthService } from "./admin.auth.service";

export async function login(req: any, res: any) {
  const admin = await AdminAuthService.login(req);
  res.json(admin);
}
