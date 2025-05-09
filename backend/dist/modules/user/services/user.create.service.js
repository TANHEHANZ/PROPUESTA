"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const CreateUserService = async (data) => {
    try {
        const existing = await prisma_client_1.prismaC.user.findUnique({
            where: { email: data.email },
        });
        if (existing) {
            return {
                success: false,
                message: "El usuario ya existe",
            };
        }
        const create = await prisma_client_1.prismaC.user.create({
            data: {
                email: data.email,
                googleId: data.googleId,
                photo: data.photo,
                status: "ACTIVO",
                role: "USER",
                createdAt: new Date(),
                name: data.name,
                telefono: data.telefono,
                ci: data.ci,
                aceptacionTerminos: data.aceptacionTerminos,
            },
        });
        if (data.contactos && data.contactos.length > 0) {
            await prisma_client_1.prismaC.contact.createMany({
                data: data.contactos.map((contacto) => ({
                    userId: create.id,
                    contact: contacto,
                })),
            });
        }
        return {
            success: true,
            message: "Usuario creado",
            data: create,
        };
    }
    catch (error) {
        console.error("Error en step2:", error);
        throw error;
    }
};
exports.CreateUserService = CreateUserService;
