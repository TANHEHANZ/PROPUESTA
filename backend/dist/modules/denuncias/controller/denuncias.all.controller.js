"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenunciaAllController = void 0;
const denuncia_all_service_1 = require("../services/denuncia.all.service");
const response_1 = require("../../../infraestructure/config/http/response");
const DenunciaAllController = async (req, res) => {
    const denuncia = await (0, denuncia_all_service_1.allDenunciasService)();
    if (!denuncia.success) {
        response_1.API.serverError(res, denuncia.message);
    }
    response_1.API.success(res, denuncia.message, denuncia.data);
};
exports.DenunciaAllController = DenunciaAllController;
