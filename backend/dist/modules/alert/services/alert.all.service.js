"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAlerts = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const allAlerts = async () => {
    try {
        const all = await prisma_client_1.prismaC.alert.findMany({
            where: {
                NOT: {
                    status: "ELIMINADO",
                },
            },
            omit: {
                status: true,
            },
        });
        if (!all) {
            return {
                success: true,
                message: "No hay alertas",
                data: null,
            };
        }
        return {
            success: true,
            message: "Alertas encontradas",
            data: all,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error al buscar alertas , contactate con hancito ;)",
            data: null,
        };
    }
};
exports.allAlerts = allAlerts;
