import { Router } from "express";
import { validate } from "../../infraestructure/helpers/validate";
import { UserExisting } from "../../infraestructure/validators/login";
import { validatedAccount } from "./controllers/validate_account.controller";
const LoginRouter = Router();

LoginRouter.post("/login", validate(UserExisting, "query"), validatedAccount);
export default LoginRouter;
