// import { RegisterInitial, step1Schema } from "../../validators/login";

// export const swaggerSchemas = {
//   RegisterInitial: {
//     type: "object",
//     properties: {
//       name: { type: "string" },
//       telefono: { type: "string", pattern: "^\\d{10}$" },
//       ci: { type: "string", pattern: "^\\d+$" },
//       email: { type: "string", format: "email" },
//       googleId: { type: "string" },
//       photo: { type: "string", format: "uri" },
//       aceptacionTerminos: { type: "boolean" },
//       contactos: {
//         type: "array",
//         items: { type: "string", pattern: "^\\d{10}$" },
//         minItems: 1,
//       },
//     },
//     required: ["email", "aceptacionTerminos"],
//   },
//   Step1Schema: {
//     type: "object",
//     properties: {
//       email: { type: "string", format: "email" },
//       name: { type: "string" },
//     },
//     required: ["email", "name"],
//   },
// };
