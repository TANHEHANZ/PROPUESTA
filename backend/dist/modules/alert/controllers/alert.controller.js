"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertController = void 0;
const alert_service_1 = require("../services/alert.service");
const response_1 = require("../../../infraestructure/config/http/response");
const alertController = async (req, res) => {
    try {
        if (!req.file) {
            response_1.API.badRequest(res, "Audio file is required");
            return;
        }
        const result = await (0, alert_service_1.AlertService)(req.body, req.file);
        response_1.API.success(res, result.message, result.data);
    }
    catch (error) {
        response_1.API.serverError(res, "Error processing alert");
    }
};
exports.alertController = alertController;
