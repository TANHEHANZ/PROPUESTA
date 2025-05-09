import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";
import { DenunciasDTO } from "../../../infraestructure/validators/denuncias";

export const CreateDenunciaService = async (
  data: DenunciasDTO,
  files: Express.Multer.File[],
  userId: string
): Promise<ResponseS> => {
  try {
    const currentCount = await prismaC.denuncia.count({
      where: {
        userId: userId,
      },
    });

    const filePaths = files.map((file) => file.path.replace(/\\/g, "/"));
    const denuncia = await prismaC.denuncia.create({
      data: {
        nombre_denunciante: data.nombre_denunciante,
        nombre_denunciado: data.nombre_denunciado,
        tipo_denuncia: data.tipo_denuncia,
        descripcion: data.descripcion,
        n_denuncia: currentCount + 1,
        recursos: filePaths,
        status: "EN_REVISION",
        userId: userId,
      },
    });

    return {
      success: true,
      message: "Denuncia creada exitosamente",
      data: denuncia,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al crear la denuncia",
      data: null,
    };
  }
};
