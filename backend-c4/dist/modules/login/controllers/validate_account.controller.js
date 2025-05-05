"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatedAccount = void 0;
const response_1 = require("../../../infraestructure/config/http/response");
const step1_1 = require("../services/step1");
const step2_1 = require("../services/step2");
const validatedAccount = async (req, res) => {
    try {
        const { step } = req.query;
        switch (step) {
            case "1": {
                const { email, name } = req.body;
                const user = await (0, step1_1.step1)(email);
                if (user.isNew) {
                    response_1.API.success(res, "Usuario nuevo detectado", {
                        email: user.email,
                        name: name,
                    });
                    return;
                }
                response_1.API.success(res, "Paso 1 validado, cuenta válida", user);
                break;
            }
            case "2": {
                const data = req.body;
                const result = await (0, step2_1.step2)(data);
                response_1.API.success(res, "Paso 2 completado con éxito", result);
                break;
            }
            default:
                response_1.API.badRequest(res, "Paso no válido");
                break;
        }
    }
    catch (error) {
        if (error instanceof Error && error.message === "El usuario ya existe") {
            response_1.API.conflict(res, error.message);
            return;
        }
        response_1.API.serverError(res, "Error al procesar el paso", error);
    }
};
exports.validatedAccount = validatedAccount;
