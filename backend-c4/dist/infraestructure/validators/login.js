"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.step1Schema = exports.RegisterInitial = exports.stepSchema = void 0;
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
const step1Schema = zod_1.z.object({
    email: zod_1.z.string().email("Formato de email inválido"),
    name: zod_1.z.string().min(1, "El nombre es obligatorio"),
});
exports.step1Schema = step1Schema;
const RegisterInitial = zod_1.z.object({
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
        .array(zod_1.z.string().regex(/^\d{10}$/, "Cada contacto debe tener 10 dígitos"))
        .min(1, "Debe proporcionar al menos un contacto")
        .optional(),
});
exports.RegisterInitial = RegisterInitial;
