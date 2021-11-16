import { client } from "../client";

/**
 * @description Log any notification which emitted from server
 */
const onClientNotification = () => {
  client.on("client_notification", ({ username, message }) => {
    console.log(message);
  });
};

export { onClientNotification };
