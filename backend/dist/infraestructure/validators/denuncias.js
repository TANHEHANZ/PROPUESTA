"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaDenuncias = void 0;
const zod_1 = require("zod");
const fileSchema = zod_1.z.object({
    type: zod_1.z.string(),
    name: zod_1.z.string(),
    base64: zod_1.z.string().optional(),
    file: zod_1.z.object({}).optional(),
});
exports.schemaDenuncias = zod_1.z.object({
    tipo_denuncia: zod_1.z.enum(["PSICOLOGICA", "FISICA", "FAMILIAR", "SEXUAL"]),
    nombre_denunciante: zod_1.z.string(),
    nombre_denunciado: zod_1.z.string(),
    descripcion: zod_1.z.string(),
    recursos: zod_1.z.any(),
});
