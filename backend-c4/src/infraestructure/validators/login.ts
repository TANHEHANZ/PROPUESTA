import { z } from "zod";

const UserExisting = z
  .object({
    email: z.string().email("Invalid email format"),
  })
  .strict();

type User = z.infer<typeof UserExisting>;

export { UserExisting, User };
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  contact1: z.string().optional(),
  contact2: z.string().optional(),
  telefonoUser: z.string().optional(),
  aceptacionTerminos: z.string().optional(),
});
