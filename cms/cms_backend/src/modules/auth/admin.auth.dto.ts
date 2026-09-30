export type AdminLoginUserDto = {
  username: string
  password: string
}

export type AdminLoginUserOutputDto = {
  username: string
  image: string | null;
  phoneNumber: string|null;
  name: string | null
}