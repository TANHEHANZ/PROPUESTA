"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const LoginService = async (email) => {
    console.log("email", email);
    try {
        const validatedUser = await prisma_client_1.prismaC.user.findUnique({
            where: {
                email,
            },
        });
        if (!validatedUser) {
            return {
                success: true,
                message: "Usuario nuevo",
                data: {
                    email,
                },
            };
        }
        return {
            success: true,
            message: "Bienvenido de nuevo a MUNAYKI",
            data: validatedUser,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error, contactate con soporte",
            data: null,
        };
    }
};
exports.LoginService = LoginService;
