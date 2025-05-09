import dotenv from "dotenv";
import { createServer } from "./main";
import { PORT } from "./infraestructure/config/enviroments";
dotenv.config();

const server = createServer();

server.listen(PORT, () => {
  console.log(`BACKEND-MUNAYKI Run in :  ${PORT}`);
});
