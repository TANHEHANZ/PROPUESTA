import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";

export const allDenunciasService = async (): Promise<ResponseS> => {
  try {
    const denuncias = await prismaC.denuncia.findMany({
      where: {
        NOT: {
          status: "ELIMINADO",
        },
      },
    });
    if (!denuncias) {
      return {
        success: true,
        message: "No tienes denuncias",
        data: null,
      };
    }

    return {
      success: true,
      message: "Denuncias encontradas",
      data: denuncias,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error en allDenunciasService",
      data: error,
    };
  }
};
