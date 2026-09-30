import { Prisma } from "@prisma/client"
import { AdminLoginUserDto,AdminLoginUserOutputDto } from "./admin.auth.dto"
// : Prisma.AdminCreateInput
export function mapAdminLoginDTOToPrismaInput(
  dto: AdminLoginUserDto
) {
  return {
    username: dto.username,
    password:dto.password
  }
}


export function mapAdminLoginDTOToPrismaOutlput(
  dto: AdminLoginUserOutputDto
) {
  return {
    username: dto.username,
    phoneNumber:dto.phoneNumber,
    image:dto.image,
    name:dto.name,
  }
}



