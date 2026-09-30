export function mapRegisterUserDTOToPrismaInput(dto) {
    return {
        name: dto.name,
        phoneNumber: dto.phoneNumber
    };
}
export function toUserTable(user) {
    return {
        id: { value: user.id },
        name: { value: user.name },
        phoneNumber: { value: user.phoneNumber },
        registeredAt: { value: user.registeredAt }
    };
}
//# sourceMappingURL=user.mapper.js.map