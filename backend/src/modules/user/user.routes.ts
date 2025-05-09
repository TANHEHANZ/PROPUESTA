import { Router } from "express";
import { CreateUser } from "./controllers/user.create.controller";
import { AllUsers } from "./controllers/user.all.controller";
import { validate } from "../../infraestructure/helpers/validate";
import { RegisterUser } from "../../infraestructure/validators/user";
const UserRoutes = Router();
UserRoutes.get("/", AllUsers);
UserRoutes.post("/create", validate(RegisterUser), CreateUser);

export default UserRoutes;
