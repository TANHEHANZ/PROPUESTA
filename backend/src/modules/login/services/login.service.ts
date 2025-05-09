import { prismaC } from "../../../infraestructure/config/prisma.client";
import { ResponseS } from "../../../infraestructure/types/API_RESPONSE";

export const LoginService = async (email: string): Promise<ResponseS> => {
  console.log("email", email);
  try {
    const validatedUser = await prismaC.user.findUnique({
      where: {
        email,
      },
    });
    if (!validatedUser) {
      return {
        success: true,
        message: "Usuario nuevo",
        data: {
          email,
        },
      };
    }
    return {
      success: true,
      message: "Bienvenido de nuevo a MUNAYKI",
      data: validatedUser,
    };
  } catch (error) {
    return {
      success: false,
      message: "Error, contactate con soporte",
      data: null,
    };
  }
};
