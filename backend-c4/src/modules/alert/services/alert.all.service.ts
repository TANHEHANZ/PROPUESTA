import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";

export const allAlerts = async (): Promise<ResponseS> => {
  try {
    const all = await prismaC.alert.findMany({
      where: {
        NOT: {
          status: "ELIMINADO",
        },
      },
      omit: {
        status: true,
      },
    });
    if (!all) {
      return {
        success: true,
        message: "No hay alertas",
        data: null,
      };
    }
    return {
      success: true,
      message: "Alertas encontradas",
      data: all,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al buscar alertas , contactate con hancito ;)",
      data: null,
    };
  }
};
