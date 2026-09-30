import { prisma } from "../core/configs";
import { PRODUCT_VIEWS } from "../modules/logs/logs.constants";

const tryParseInt = (n: any) => {
  if (n != undefined && n != null) return parseInt(n);

  return undefined;
};

class FilterUtill {
  client: any;
  constructor(client: any) {
    this.client = client;
  }

    static use(client: any) {
    return new FilterUtill(client);
  }

  async findManyByLogs(data: any) {

    const {
      begin = undefined,
      end = undefined,
      where = undefined,
      onlyExistedLog=true,
      select = {},
      logName,
      sort = "asc",
    } = data;


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


    if(!onlyExistedLog){
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

    data = [...data,...notExistedLogs];
    }
   
    const count = data.length;

    data = data
      .sort((a: any, b: any) => b.logs.length - a.logs.length)
      .slice(0, end);


    return {data:data,count};
  }




  //   async query(query: any, res: any | null, where: any = undefined,select:any = undefined) {
  async findMany(data: any) {
    const { query, res, where = undefined, select = undefined } = data;

    const {
      page = 1,
      limit = 20,
      sort = "desc",
      orderBy = "createdAt",
    } = query;

  

    const count = await this.client.count({
      where: where,
    });


    const _data = await this.client.findMany({
      skip: tryParseInt((page ) * limit),
      take: tryParseInt(limit),
      select: select,
      orderBy: {
        [orderBy]: sort,
        // createdAt: true
        // id: "asc",
      },
      where: where,
    });
    return {data:_data,count}
  }

  
}

export default FilterUtill;
