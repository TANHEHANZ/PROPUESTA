import { string, z } from "zod";

const fileSchema = z.object({
  type: z.string(),
  name: z.string(),
  base64: z.string().optional(),
  file: z.object({}).optional(),
});

export const schemaDenuncias = z.object({
  tipo_denuncia: z.enum(["PSICOLOGICA", "FISICA", "FAMILIAR", "SEXUAL"]),
  nombre_denunciante: z.string(),
  nombre_denunciado: z.string(),
  descripcion: z.string(),
  recursos: z.any(),
});

export type Denuncias = z.infer<typeof schemaDenuncias>;
export type DenunciasDTO = z.infer<typeof schemaDenuncias>;
