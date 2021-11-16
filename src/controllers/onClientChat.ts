import chalk from "chalk";
import { client } from "../client";

/**
 * @description Client chat event
 */
const onClientChat = () => {
  client.on("client_chat", (data) => {
    const { username, room, message } = data;
    console.log(`${chalk.blueBright(username)}: ${message}`);
  });
};

export { onClientChat };
