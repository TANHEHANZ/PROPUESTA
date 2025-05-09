import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";
import { RegisterUserDTO } from "../../../infraestructure/validators/user";

export const CreateUserService = async (
  data: RegisterUserDTO
): Promise<ResponseS> => {
  try {
    const existing = await prismaC.user.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      return {
        success: false,
        message: "El usuario ya existe",
      };
    }

    const create = await prismaC.user.create({
      data: {
        email: data.email,
        googleId: data.googleId,
        photo: data.photo,
        status: "ACTIVO",
        role: "USER",
        createdAt: new Date(),
        name: data.name,
        telefono: data.telefono,
        ci: data.ci,
        aceptacionTerminos: data.aceptacionTerminos,
      },
    });

    if (data.contactos && data.contactos.length > 0) {
      await prismaC.contact.createMany({
        data: data.contactos.map((contacto) => ({
          userId: create.id,
          contact: contacto,
        })),
      });
    }

    return {
      success: true,
      message: "Usuario creado",
      data: create,
    };
  } catch (error) {
    console.error("Error en step2:", error);
    throw error;
  }
};
