"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const login_routes_1 = __importDefault(require("./login/login.routes"));
const user_routes_1 = __importDefault(require("./user/user.routes"));
const alrt_routes_1 = __importDefault(require("./alert/alrt.routes"));
const denuncias_routes_1 = __importDefault(require("./denuncias/denuncias.routes"));
exports.router = (0, express_1.Router)();
exports.router.use("/login", login_routes_1.default);
exports.router.use("/user", user_routes_1.default);
exports.router.use("/alert", alrt_routes_1.default);
exports.router.use("/denuncias", denuncias_routes_1.default);
exports.default = exports.router;
