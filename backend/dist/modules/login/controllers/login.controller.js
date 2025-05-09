"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const login_service_1 = require("../services/login.service");
const response_1 = require("../../../infraestructure/config/http/response");
const LoginController = async (req, res) => {
    console.log("req.body", req.body);
    const { email } = req.body;
    const init = await (0, login_service_1.LoginService)(email);
    if (!init.success) {
        response_1.API.serverError(res, init.message);
    }
    response_1.API.success(res, init.message, init.data);
    return;
};
exports.LoginController = LoginController;
