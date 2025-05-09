"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const user_create_service_1 = require("../services/user.create.service");
const response_1 = require("../../../infraestructure/config/http/response");
const CreateUser = async (req, res) => {
    const data = req.body;
    const create = await (0, user_create_service_1.CreateUserService)(data);
    if (!create.success) {
        response_1.API.serverError(res, create.message);
    }
    response_1.API.success(res, create.message, create);
    return;
};
exports.CreateUser = CreateUser;
