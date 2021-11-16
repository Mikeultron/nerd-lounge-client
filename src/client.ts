import { io } from "socket.io-client";
import { clientOnConnect } from "./models/clientOnConnect";

const client = io("http://localhost:3000");

client.on("connect", clientOnConnect);

export { client };
