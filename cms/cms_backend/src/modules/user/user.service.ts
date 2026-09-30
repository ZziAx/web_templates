import { Prisma } from "@prisma/client";
import { prisma } from "../../core/configs";
import { RegisterUserDTO ,LoginUserData} from "./user.dto";
import { mapRegisterUserDTOToPrismaInput, toUserTable } from "./user.mapper";
import FilterUtill from "../../filters/filterUtil";

export class UserService {
  
  static async signUp(dto: RegisterUserDTO) {
    const data = mapRegisterUserDTOToPrismaInput(dto);
    return await prisma.user.create({
      data: data,
    });
  }

  static async login(dto: LoginUserData){

  }

  static async getTableUsers(req:any,res:any){
    const filter =  FilterUtill.use(prisma.user);

    const users = await filter.findMany({
          query: Object.assign({},req.query,{orderBy:"id"}),
      res: res,
      
    });


    console.log("wrioiuoerw ",users);


    const p = users.data.map((_p:any)=>toUserTable(_p));

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
    

    return { cols: cols, rows: p,count:users.count };

  }
}
