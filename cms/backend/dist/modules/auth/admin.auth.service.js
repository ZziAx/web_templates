import { prisma } from "../../core/configs";
import { mapAdminLoginDTOToPrismaInput, mapAdminLoginDTOToPrismaOutlput, } from "./admin.auth.mapper";
export class AdminAuthService {
    static async login(dto) {
        const { username, password } = mapAdminLoginDTOToPrismaInput(dto);
        const user = await prisma.admin.findFirst({
            where: {
                username: username,
                password: password,
            },
        });
        if (!user) {
            return {};
        }
        const mapped = mapAdminLoginDTOToPrismaOutlput(user);
        return mapped;
    }
}
//# sourceMappingURL=admin.auth.service.js.map