import { Router } from "express";
import { validate } from "../../infraestructure/helpers/validate";
import { schemaDenuncias } from "../../infraestructure/validators/denuncias";
import { CreateDenunciaController } from "./controller/denuncia.create.controller";
import { upload } from "../../infraestructure/lib/multer.config";
import { DenunciaAllController } from "./controller/denuncias.all.controller";

const DenunciasRouter = Router();

DenunciasRouter.post(
  "/",
  upload.array("recursos", 10),
  validate(schemaDenuncias, "file"),
  CreateDenunciaController
).get("/", DenunciaAllController);

export default DenunciasRouter;
