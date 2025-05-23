"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alert_controller_1 = require("./controllers/alert.controller");
const validate_1 = require("../../infraestructure/helpers/validate");
const alert_1 = require("../../infraestructure/validators/alert");
const multer_config_1 = require("../../infraestructure/lib/multer.config");
const alert_all_controller_1 = require("./controllers/alert.all.controller");
const AlertRouter = (0, express_1.Router)();
AlertRouter.post("/", multer_config_1.upload.single("audio"), (0, validate_1.validate)(alert_1.alertSchema, "file"), alert_controller_1.alertController);
AlertRouter.get("/", alert_all_controller_1.AlertAll);
exports.default = AlertRouter;
