import { prisma } from "../../core/configs";
import { mapRegisterUserDTOToPrismaInput, toUserTable } from "./user.mapper";
import FilterUtill from "../../filters/filterUtil";
export class UserService {
    static async signUp(dto) {
        const data = mapRegisterUserDTOToPrismaInput(dto);
        return await prisma.user.create({
            data: data,
        });
    }
    static async login(dto) {
    }
    static async getTableUsers(req, res) {
        const filter = FilterUtill.use(prisma.user);
        const users = await filter.findMany({
            query: Object.assign({}, req.query, { orderBy: "id" }),
            res: res,
        });
        console.log("wrioiuoerw ", users);
        const p = users.data.map((_p) => toUserTable(_p));
        const cols = {
            // id: { title: "id", component: 1 ,
            //     width:"50px"
            // },
            name: {
                title: "نام",
                component: 0,
            },
            phoneNumber: { title: "شماره تلفن", component: 1 },
            registeredAt: { title: "انبار", component: 1 }
        };
        return { cols: cols, rows: p, count: users.count };
    }
}
//# sourceMappingURL=user.service.js.map