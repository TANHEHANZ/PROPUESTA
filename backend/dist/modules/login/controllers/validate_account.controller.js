"use strict";
// import { Request, Response } from "express";
// import { API } from "../../../infraestructure/config/http/response";
// import { step1 } from "../services/step1";
// import { step2 } from "../../user/services/user.create.service";
// export const validatedAccount = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const { step } = req.query;
//     switch (step) {
//       case "1": {
//         const { email, name } = req.body;
//         const user = await step1(email);
//         if (user.isNew) {
//           API.success(res, "Usuario nuevo detectado", {
//             email: user.email,
//             name: name,
//           });
//           return;
//         }
//         API.success(res, "Paso 1 validado, cuenta válida", user);
//         break;
//       }
//       case "2": {
//         const data = req.body;
//         const result = await step2(data);
//         API.success(res, "Paso 2 completado con éxito", result);
//         break;
//       }
//       default:
//         API.badRequest(res, "Paso no válido");
//         break;
//     }
//   } catch (error) {
//     if (error instanceof Error && error.message === "El usuario ya existe") {
//       API.conflict(res, error.message);
//       return;
//     }
//     API.serverError(res, "Error al procesar el paso", error);
//   }
// };
