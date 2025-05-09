import { Router } from "express";
import { validate } from "../../infraestructure/helpers/validate";
import { login } from "../../infraestructure/validators/login";
import { LoginController } from "./controllers/login.controller";

const LoginRouter = Router();

LoginRouter.post("/", validate(login, "body"), LoginController);

export default LoginRouter;
