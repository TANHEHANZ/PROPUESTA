"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertService = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const AlertService = async (data, file) => {
    const create = await prisma_client_1.prismaC.alert.create({
        data: {
            userId: data.id_user,
            latitud: data.latitud,
            longitud: data.longitud,
            audio: file.path.replace(/\\/g, "/"),
            status: "ALERTADO",
        },
        omit: {
            status: true,
        },
    });
    return {
        success: true,
        message: "Alerta enviada",
        data: create,
    };
};
exports.AlertService = AlertService;
