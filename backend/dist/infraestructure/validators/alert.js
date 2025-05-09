"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertSchema = void 0;
const zod_1 = require("zod");
const alertSchema = zod_1.z.object({
    id_user: zod_1.z.string().uuid(),
    audio: zod_1.z.any(),
    latitud: zod_1.z.string(),
    longitud: zod_1.z.string(),
});
exports.alertSchema = alertSchema;
