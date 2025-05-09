import { z } from "zod";

const stepSchema = z.object({
  step: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 1 && val <= 3, {
      message: "El paso debe ser un número entre 1 y 3",
    }),
});

const login = z
  .object({
    email: z.string().email("Formato de email inválido"),
  })
  .strict();

export { stepSchema, login };
