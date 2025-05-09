"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertAll = void 0;
const alert_all_service_1 = require("../services/alert.all.service");
const response_1 = require("../../../infraestructure/config/http/response");
const AlertAll = async (req, res) => {
    const all = await (0, alert_all_service_1.allAlerts)();
    if (!all.success) {
        response_1.API.serverError(res, all.message);
        return;
    }
    response_1.API.success(res, all.message, all.data);
};
exports.AlertAll = AlertAll;
