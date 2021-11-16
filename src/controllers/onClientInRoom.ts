import chalk from "chalk";
import { client } from "../client";
import { userInput } from "../lib/inquirer";

/**
 * @param username - Client username
 *
 * @description The logic when client is in a room. Client will ask for user inputs while client is still connected and emit a chat event.
 */
const onClientInRoom = (username: string) => {
  client.on("client_in_room", async ({ room }) => {
    while (!client.disconnected) {
      const { message } = await userInput();
      switch (message) {
        case "/quit":
          client.emit("server_disconnect", {
            username,
            room,
          });
          client.disconnect();
          return (process.exitCode = 1);
        default:
          client.emit("server_chat", {
            username,
            message,
            room,
          });
          console.log(`${chalk.green("You:")} ${message}`);
      }
    }
  });
};

export { onClientInRoom };
