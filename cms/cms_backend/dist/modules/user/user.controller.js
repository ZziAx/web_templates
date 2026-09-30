import { UserService } from "./user.service";
export async function getTableUsers(req, res) {
    const users = await UserService.getTableUsers(req, res);
    res.json(users);
}
//# sourceMappingURL=user.controller.js.map