import { Router } from "express";
import { validate } from "../../infraestructure/helpers/validate";
import { validatedAccount } from "./controllers/validate_account.controller";
import {
  RegisterInitial,
  stepSchema,
} from "../../infraestructure/validators/login";
const LoginRouter = Router();

LoginRouter.post(
  "/initialize",
  validate(stepSchema, "query"),
  (req, res, next) => {
    const step = req.query.step as any;
    console.log("step", step);
    if (step === 1) {
      return validate(stepSchema, "body")(req, res, next);
    }
    if (step === 2) {
      return validate(RegisterInitial, "body")(req, res, next);
    }
    next();
  },
  validatedAccount
);

export default LoginRouter;
