"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allDenunciasService = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const allDenunciasService = async () => {
    try {
        const denuncias = await prisma_client_1.prismaC.denuncia.findMany({
            where: {
                NOT: {
                    status: "ELIMINADO",
                },
            },
        });
        if (!denuncias) {
            return {
                success: true,
                message: "No tienes denuncias",
                data: null,
            };
        }
        return {
            success: true,
            message: "Denuncias encontradas",
            data: denuncias,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error en allDenunciasService",
            data: error,
        };
    }
};
exports.allDenunciasService = allDenunciasService;
