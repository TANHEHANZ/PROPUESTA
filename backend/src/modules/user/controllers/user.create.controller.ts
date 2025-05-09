import { Request, Response } from "express";
import { CreateUserService } from "../services/user.create.service";
import { API } from "../../../infraestructure/config/http/response";

export const CreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const data = req.body;
  const create = await CreateUserService(data);
  if (!create.success) {
    API.serverError(res, create.message);
  }
  API.success(res, create.message, create);
  return;
};
