import { Router } from "express";
import { validate } from "../../infraestructure/helpers/validate";
import { validatedAccount } from "./controllers/validate_account.controller";
import {
  RegisterInitial,
  stepSchema,
} from "../../infraestructure/validators/login";

const LoginRouter = Router();

/**
 * @swagger
 * /initialize:
 *   post:
 *     tags: [Authentication]
 *     summary: Initialize the login process
 *     parameters:
 *       - in: query
 *         name: step
 *         schema:
 *           $ref: '#/components/schemas/StepQuery'
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/Step1Schema'
 *               - $ref: '#/components/schemas/RegisterInitial'
 *     responses:
 *       200:
 *         description: Successfully initialized
 *       400:
 *         description: Validation error
 */
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
