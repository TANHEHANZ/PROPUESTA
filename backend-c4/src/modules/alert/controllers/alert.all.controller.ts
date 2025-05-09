import { Request, Response } from "express";
import { allAlerts } from "../services/alert.all.service";
import { API } from "../../../infraestructure/config/http/response";

export const AlertAll = async (req: Request, res: Response): Promise<void> => {
  const all = await allAlerts();
  if (!all.success) {
    API.serverError(res, all.message);
    return;
  }
  API.success(res, all.message, all.data);
};
