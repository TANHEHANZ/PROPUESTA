"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.stepSchema = void 0;
const zod_1 = require("zod");
const stepSchema = zod_1.z.object({
    step: zod_1.z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val) && val >= 1 && val <= 3, {
        message: "El paso debe ser un número entre 1 y 3",
    }),
});
exports.stepSchema = stepSchema;
const login = zod_1.z
    .object({
    email: zod_1.z.string().email("Formato de email inválido"),
})
    .strict();
exports.login = login;
