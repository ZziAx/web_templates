// : Prisma.AdminCreateInput
export function mapAdminLoginDTOToPrismaInput(dto) {
    return {
        username: dto.username,
        password: dto.password
    };
}
export function mapAdminLoginDTOToPrismaOutlput(dto) {
    return {
        username: dto.username,
        phoneNumber: dto.phoneNumber,
        image: dto.image,
        name: dto.name,
    };
}
//# sourceMappingURL=admin.auth.mapper.js.map