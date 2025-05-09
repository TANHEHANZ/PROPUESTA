"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step2 = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const step2 = async (data) => {
    try {
        const user = await prisma_client_1.prismaC.user.findUnique({
            where: { email: data.email },
        });
        if (user) {
            throw new Error("El usuario ya existe");
        }
        const updatedUser = await prisma_client_1.prismaC.user.create({
            data: {
                email: data.email,
                googleId: data.googleId,
                photo: data.photo,
                status: "ACTIVE",
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
                    userId: updatedUser.id,
                    contact: contacto,
                })),
            });
        }
        return updatedUser;
    }
    catch (error) {
        console.error("Error en step2:", error);
        throw error;
    }
};
exports.step2 = step2;
