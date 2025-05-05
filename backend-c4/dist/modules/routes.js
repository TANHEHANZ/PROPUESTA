"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const login_routes_1 = __importDefault(require("./login/login.routes"));
exports.router = (0, express_1.Router)();
exports.router.use("/login", login_routes_1.default);
exports.default = exports.router;
