import { client } from "../client";
import { onClientChat } from "../controllers/onClientChat";
import { onClientInRoom } from "../controllers/onClientInRoom";
import { onClientNotification } from "../controllers/onClientNotification";
import {
  askJoinOrCreateRoom,
  askUserInfo,
  createRoomInquiries,
  joinRoomInquiries,
} from "../lib/inquirer";

export const clientOnConnect = async () => {
  console.clear();
  const { username } = await askUserInfo();
  const { roomType } = await askJoinOrCreateRoom();

  // When user choose to create room
  if (roomType === "Create") {
    const { room_name } = await createRoomInquiries();
    client.emit("server_create_room", {
      room: room_name,
      username,
    });
    console.clear();
  }

  // When user choose to join room
  if (roomType === "Join") {
    const { room_name } = await joinRoomInquiries();
    client.emit("server_join_room", {
      room: room_name,
      username,
    });
  }

  // Client events
  onClientInRoom(username);
  onClientChat();
  onClientNotification();
};
