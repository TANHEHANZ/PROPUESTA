import {
  RegisterInitial,
  step1Schema,
  stepSchema,
} from "../../validators/login";
import { zodToOpenApi } from "./formater";

export const swaggerConfig = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
    },
    components: {
      schemas: {
        RegisterInitial: zodToOpenApi(RegisterInitial),
        Step1Schema: zodToOpenApi(step1Schema),
        StepQuery: zodToOpenApi(stepSchema),
      },
    },
  },
  apis: ["./src/modules/**/*.routes.ts"],
};
