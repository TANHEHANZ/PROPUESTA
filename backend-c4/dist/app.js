"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const main_1 = require("./main");
const enviroments_1 = require("./infraestructure/config/enviroments");
dotenv_1.default.config();
const server = (0, main_1.createServer)();
server.listen(enviroments_1.PORT, () => {
    console.log(`BACKEND-MUNAYKI Run in :  ${enviroments_1.PORT}`);
});
