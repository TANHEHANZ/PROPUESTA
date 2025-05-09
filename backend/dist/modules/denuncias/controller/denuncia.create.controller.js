"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDenunciaController = void 0;
const denuncia_create_service_1 = require("../services/denuncia.create.service");
const response_1 = require("../../../infraestructure/config/http/response");
const CreateDenunciaController = async (req, res) => {
    try {
        if (!req.files || !Array.isArray(req.files)) {
            response_1.API.badRequest(res, "No se proporcionaron archivos");
            return;
        }
        const UserId = "2f49dd57-c37c-4600-a400-3b3d8a6fb661";
        const result = await (0, denuncia_create_service_1.CreateDenunciaService)(req.body, req.files, UserId);
        if (!result.success) {
            response_1.API.serverError(res, result.message);
            return;
        }
        response_1.API.success(res, result.message, result.data);
    }
    catch (error) {
        response_1.API.serverError(res, "Error al procesar la denuncia");
    }
};
exports.CreateDenunciaController = CreateDenunciaController;
