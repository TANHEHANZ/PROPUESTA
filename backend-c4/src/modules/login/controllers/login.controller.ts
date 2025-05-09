import { Request, Response } from "express";
import { LoginService } from "../services/login.service";
import { API } from "../../../infraestructure/config/http/response";

export const LoginController = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("req.body", req.body);
  const { email } = req.body;
  const init = await LoginService(email);
  if (!init.success) {
    API.serverError(res, init.message);
  }
  API.success(res, init.message, init.data);
  return;
};
