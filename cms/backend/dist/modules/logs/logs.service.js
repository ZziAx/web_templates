import { prisma } from "../../core/configs.js";
class LogsService {
    static async add(name) {
        return await prisma.logs.create({
            data: {
                name: name,
            },
        });
    }
    static async get(name) {
        return await prisma.logs.findMany({
            where: {
                name: name,
            },
        });
    }
    static async count(name) {
        return await prisma.logs.count({
            where: {
                name: name,
            },
        });
    }
    static async lastnDays(name, n = 1) {
        const now = new Date();
        const begin = new Date(now.getFullYear(), now.getMonth(), now.getDay() - n, now.getHours(), now.getMinutes());
        return await prisma.logs.count({
            where: {
                name: name,
                createdAt: {
                    gte: begin, // greater than or equal
                    lte: now, // less than or equal
                },
            },
        });
    }
    static async day(name, beforeToday = 0) {
        const now = new Date();
        const begin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - beforeToday);
        const end = new Date(begin.getFullYear(), begin.getMonth(), begin.getDate() + 1);
        // console.log("begin end",begin.toLocaleDateString(),end.toLocaleDateString());
        return await prisma.logs.count({
            where: {
                name: name,
                createdAt: {
                    gte: begin, // greater than or equal
                    lte: end, // less than or equal
                },
            },
        });
    }
    static async grothAndCount(name, beforeToday = 1) {
        const n1 = await this.day(name, beforeToday);
        const n2 = await this.day(name);
        return {
            count: n2,
            groth: n2 - n1,
        };
    }
    static async fromUntilNow(name, dayDiffer = 1) {
        const now = new Date();
        const begin = new Date(now.getFullYear(), now.getMonth(), now.getDay() - dayDiffer, now.getHours(), now.getMinutes());
        return await prisma.logs.count({
            where: {
                name: name,
                createdAt: {
                    gte: begin, // greater than or equal
                    lte: now, // less than or equal
                },
            },
        });
    }
}
export default LogsService;
//# sourceMappingURL=logs.service.js.map