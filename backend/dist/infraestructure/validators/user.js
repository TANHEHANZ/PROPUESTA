"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUser = void 0;
const zod_1 = require("zod");
const RegisterUser = zod_1.z.object({
    name: zod_1.z.string().min(1, "El nombre es obligatorio").optional(),
    telefono: zod_1.z
        .string()
        .regex(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
        .optional(),
    ci: zod_1.z.string().regex(/^\d+$/, "El CI debe ser un número").optional(),
    email: zod_1.z.string().email("Formato de email inválido"),
    googleId: zod_1.z.string().optional(),
    photo: zod_1.z.string().url("La foto debe ser una URL válida").optional(),
    aceptacionTerminos: zod_1.z.boolean().refine((val) => val === true, {
        message: "Debe aceptar los términos y condiciones",
    }),
    contactos: zod_1.z
        .array(zod_1.z.string().regex(/^\d{8}$/, "Cada contacto debe tener 8 dígitos"))
        .min(1, "Debe proporcionar al menos un contacto")
        .optional(),
});
exports.RegisterUser = RegisterUser;
