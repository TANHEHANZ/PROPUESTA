import express, { Request, Response } from "express";
import cors from "cors";
import router from "./modules/routes";
import * as dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import { swaggerConfig } from "./infraestructure/lib/lib.index";
dotenv.config();

const swaggerDocs = swaggerJsdoc(swaggerConfig);

export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .use("/api/v2", router)
    .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.get("/", (req: Request, res: Response) => {
    res.json({
      status: "success",
      message: "Service is running",
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
