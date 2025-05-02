import { z } from "zod";

const stepSchema = z.object({
  step: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 1 && val <= 3, {
      message: "El paso debe ser un número entre 1 y 3",
    }),
});

const step1Schema = z.object({
  email: z.string().email("Formato de email inválido"),
  name: z.string().min(1, "El nombre es obligatorio"),
});
const RegisterInitial = z.object({
  name: z.string().min(1, "El nombre es obligatorio").optional(),
  telefono: z
    .string()
    .regex(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
    .optional(),
  ci: z.string().regex(/^\d+$/, "El CI debe ser un número").optional(),
  email: z.string().email("Formato de email inválido"),
  googleId: z.string().optional(),
  photo: z.string().url("La foto debe ser una URL válida").optional(),
  aceptacionTerminos: z.boolean().refine((val) => val === true, {
    message: "Debe aceptar los términos y condiciones",
  }),
  contactos: z
    .array(z.string().regex(/^\d{10}$/, "Cada contacto debe tener 10 dígitos"))
    .min(1, "Debe proporcionar al menos un contacto")
    .optional(),
});
type RegisterInitialDTO = z.infer<typeof RegisterInitial>;

export { stepSchema, RegisterInitial, RegisterInitialDTO, step1Schema };
