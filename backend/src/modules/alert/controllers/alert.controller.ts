import { Request, Response } from "express";
import { AlertService } from "../services/alert.service";
import { API } from "../../../infraestructure/config/http/response";
export const alertController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      API.badRequest(res, "Audio file is required");
      return;
    }

    const result = await AlertService(req.body, req.file);
    API.success(res, result.message, result.data);
  } catch (error) {
    API.serverError(res, "Error processing alert");
  }
};
