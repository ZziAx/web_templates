const tryParseInt = (n) => {
    if (n != undefined && n != null)
        return parseInt(n);
    return undefined;
};
class FilterUtill {
    client;
    constructor(client) {
        this.client = client;
    }
    static use(client) {
        return new FilterUtill(client);
    }
    async findManyByLogs(data) {
        const { begin = undefined, end = undefined, where = undefined, onlyExistedLog = true, select = {}, logName, sort = "asc", } = data;
        var data = await this.client.findMany({
            select: select,
            where: {
                logs: {
                    some: {
                        name: logName,
                    },
                },
            },
        });
        if (!onlyExistedLog) {
            var notExistedLogs = await this.client.findMany({
                select: select,
                where: {
                    logs: {
                        none: {
                            name: logName,
                        },
                    },
                },
            });
            data = [...data, ...notExistedLogs];
        }
        const count = data.length;
        data = data
            .sort((a, b) => b.logs.length - a.logs.length)
            .slice(0, end);
        return { data: data, count };
    }
    //   async query(query: any, res: any | null, where: any = undefined,select:any = undefined) {
    async findMany(data) {
        const { query, res, where = undefined, select = undefined } = data;
        const { page = 1, limit = 20, sort = "desc", orderBy = "createdAt", } = query;
        const count = await this.client.count({
            where: where,
        });
        const _data = await this.client.findMany({
            // skip: tryParseInt((page ) * limit),
            // take: tryParseInt(limit),
            select: select,
            orderBy: {
                [orderBy]: sort,
                // createdAt: true
                // id: "asc",
            },
            where: where,
        });
        return { data: _data, count };
    }
}
export default FilterUtill;
//# sourceMappingURL=filterUtil.js.map