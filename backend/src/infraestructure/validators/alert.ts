import { z } from "zod";

const alertSchema = z.object({
  id_user: z.string().uuid(),
  audio: z.any(),
  latitud: z.string(),
  longitud: z.string(),
});

type AlertDTO = z.infer<typeof alertSchema>;

export { alertSchema, AlertDTO };
