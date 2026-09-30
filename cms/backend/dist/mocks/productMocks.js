import { prisma } from "../core/configs";
const _mock = [
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
    {
        name: "iphone8",
        description: "description",
        uri: "/",
        price: 192
    },
];
export const regProductMock = async () => {
    await prisma.product.createMany({
        data: [
            ..._mock
        ]
    });
};
//# sourceMappingURL=productMocks.js.map