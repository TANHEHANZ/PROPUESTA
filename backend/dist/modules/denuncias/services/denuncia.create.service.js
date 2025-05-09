"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDenunciaService = void 0;
const prisma_client_1 = require("../../../infraestructure/config/prisma.client");
const CreateDenunciaService = async (data, files, userId) => {
    try {
        const currentCount = await prisma_client_1.prismaC.denuncia.count({
            where: {
                userId: userId,
            },
        });
        const filePaths = files.map((file) => file.path.replace(/\\/g, "/"));
        const denuncia = await prisma_client_1.prismaC.denuncia.create({
            data: {
                nombre_denunciante: data.nombre_denunciante,
                nombre_denunciado: data.nombre_denunciado,
                tipo_denuncia: data.tipo_denuncia,
                descripcion: data.descripcion,
                n_denuncia: currentCount + 1,
                recursos: filePaths,
                status: "EN_REVISION",
                userId: userId,
            },
        });
        return {
            success: true,
            message: "Denuncia creada exitosamente",
            data: denuncia,
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Error al crear la denuncia",
            data: null,
        };
    }
};
exports.CreateDenunciaService = CreateDenunciaService;
