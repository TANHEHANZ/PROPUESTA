import { z } from "zod";

const RegisterUser = z.object({
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
    .array(z.string().regex(/^\d{8}$/, "Cada contacto debe tener 8 dígitos"))
    .min(1, "Debe proporcionar al menos un contacto")
    .optional(),
});

type RegisterUserDTO = z.infer<typeof RegisterUser>;

export { RegisterUser, RegisterUserDTO };
