"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step1 = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const step1 = async (email) => {
    try {
        const user = await prisma_client_1.prismaC.user.findFirst({
            where: {
                email,
                status: {
                    in: ["ACTIVO", "APROBADO"],
                },
            },
        });
        if (!user) {
            return { isNew: true, email };
        }
        return { isNew: false, user };
    }
    catch (error) {
        console.error("Error en step1:", error);
        throw error;
    }
};
exports.step1 = step1;
