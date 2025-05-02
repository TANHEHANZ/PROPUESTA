import { prismaC } from "../../../infraestructure/config/prisma.client";
import { RegisterInitialDTO } from "../../../infraestructure/validators/login";

export const step2 = async (data: RegisterInitialDTO) => {
  try {
    const user = await prismaC.user.findUnique({
      where: { email: data.email },
    });

    if (user) {
      throw new Error("El usuario ya existe");
    }

    const updatedUser = await prismaC.user.create({
      data: {
        email: data.email,
        googleId: data.googleId,
        photo: data.photo,
        status: "ACTIVE",
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
          userId: updatedUser.id,
          contact: contacto,
        })),
      });
    }

    return updatedUser;
  } catch (error) {
    console.error("Error en step2:", error);
    throw error;
  }
};
