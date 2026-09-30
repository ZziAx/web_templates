import { UserService } from "./user.service";

export async function getTableUsers(req:any,res:any){
    const users = await UserService.getTableUsers(req,res);
    res.json(users);

}