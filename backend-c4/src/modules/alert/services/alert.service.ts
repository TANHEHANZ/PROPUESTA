import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";
import { AlertDTO } from "../../../infraestructure/validators/alert";

export const AlertService = async (
  data: AlertDTO,
  file: Express.Multer.File
): Promise<ResponseS> => {
  const create = await prismaC.alert.create({
    data: {
      userId: data.id_user,
      latitud: data.latitud,
      longitud: data.longitud,
      audio: file.path.replace(/\\/g, "/"),
      status: "ALERTADO",
    },
    omit: {
      status: true,
    },
  });

  return {
    success: true,
    message: "Alerta enviada",
    data: create,
  };
};
