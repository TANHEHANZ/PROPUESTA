import express, { Request, Response } from "express";
import cors from "cors";
import router from "./modules/routes";
import * as dotenv from "dotenv";
dotenv.config();
export const createServer = () => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .use("/api/v2", router);

  app.get("/", (req: Request, res: Response) => {
    res.json({
      status: "success",
      message: "Service is running",
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};
