import { Router } from "express";
import { alertController } from "./controllers/alert.controller";
import { validate } from "../../infraestructure/helpers/validate";
import { alertSchema } from "../../infraestructure/validators/alert";
import { upload } from "../../infraestructure/lib/multer.config";
import { AlertAll } from "./controllers/alert.all.controller";

const AlertRouter = Router();
AlertRouter.post(
  "/",
  upload.single("audio"),
  validate(alertSchema, "file"),
  alertController
);
AlertRouter.get("/", AlertAll);

export default AlertRouter;
