"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../infraestructure/helpers/validate");
const validate_account_controller_1 = require("./controllers/validate_account.controller");
const login_1 = require("../../infraestructure/validators/login");
const LoginRouter = (0, express_1.Router)();
LoginRouter.post("/initialize", (0, validate_1.validate)(login_1.stepSchema, "query"), (req, res, next) => {
    const step = req.query.step;
    console.log("step", step);
    if (step === 1) {
        return (0, validate_1.validate)(login_1.stepSchema, "body")(req, res, next);
    }
    if (step === 2) {
        return (0, validate_1.validate)(login_1.RegisterInitial, "body")(req, res, next);
    }
    next();
}, validate_account_controller_1.validatedAccount);
exports.default = LoginRouter;
