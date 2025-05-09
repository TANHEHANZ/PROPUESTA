"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_1 = require("../../infraestructure/helpers/validate");
const login_1 = require("../../infraestructure/validators/login");
const login_controller_1 = require("./controllers/login.controller");
const LoginRouter = (0, express_1.Router)();
LoginRouter.post("/", (0, validate_1.validate)(login_1.login, "body"), login_controller_1.LoginController);
exports.default = LoginRouter;
