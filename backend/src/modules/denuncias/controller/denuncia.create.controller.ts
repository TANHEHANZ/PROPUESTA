import { Request, Response } from "express";
import { CreateDenunciaService } from "../services/denuncia.create.service";
import { API } from "../../../infraestructure/config/http/response";

export const CreateDenunciaController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      API.badRequest(res, "No se proporcionaron archivos");
      return;
    }
    const UserId = "2f49dd57-c37c-4600-a400-3b3d8a6fb661";

    const result = await CreateDenunciaService(req.body, req.files, UserId);
    if (!result.success) {
      API.serverError(res, result.message);
      return;
    }
    API.success(res, result.message, result.data);
  } catch (error) {
    API.serverError(res, "Error al procesar la denuncia");
  }
};
