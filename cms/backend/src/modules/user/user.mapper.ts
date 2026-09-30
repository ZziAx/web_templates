import { Prisma } from "@prisma/client"
import { RegisterUserDTO } from "./user.dto"
import { User as PrismaUser } from "@prisma/client"

export function mapRegisterUserDTOToPrismaInput(
  dto: RegisterUserDTO
): Prisma.UserCreateInput {
  return {
    name: dto.name,
    phoneNumber:dto.phoneNumber
  }
}

export function toUserTable(user:PrismaUser){
  return {
      id:{value:user.id},
      name:{value:user.name},
      phoneNumber:{value:user.phoneNumber},
      registeredAt:{value:user.registeredAt}
  }
}