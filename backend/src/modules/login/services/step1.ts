import { prismaC } from "../../../infraestructure/config/prisma.client";

export const step1 = async (email: string) => {
  try {
    const user = await prismaC.user.findFirst({
      where: {
        email,
        status: {
          in: ["ACTIVO", "APROBADO"],
        },
      },
    });

    if (!user) {
      return { isNew: true, email };
    }

    return { isNew: false, user };
  } catch (error) {
    console.error("Error en step1:", error);
    throw error;
  }
};
