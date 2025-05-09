import { Request, Response } from "express";
import { allDenunciasService } from "../services/denuncia.all.service";
import { API } from "../../../infraestructure/config/http/response";

export const DenunciaAllController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const denuncia = await allDenunciasService();
  if (!denuncia.success) {
    API.serverError(res, denuncia.message);
  }
  API.success(res, denuncia.message, denuncia.data);
};
