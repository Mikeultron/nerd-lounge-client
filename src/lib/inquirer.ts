import chalk from "chalk";
import { prompt, QuestionCollection } from "inquirer";

export const askUserInfo = () => {
  const questions: QuestionCollection = [
    {
      type: "input",
      name: "username",
      message: "Enter username",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter your username!";
        }
      },
    },
  ];
  return prompt(questions);
};

export const askJoinOrCreateRoom = () => {
  const questions: QuestionCollection = [
    {
      type: "list",
      name: "roomType",
      message: "Would you like to join room or create room?",
      choices: ["Join", "Create"],
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please choose one option!";
        }
      },
    },
  ];
  return prompt(questions);
};

export const joinRoomInquiries = () => {
  const questions: QuestionCollection = [
    {
      type: "input",
      name: "room_name",
      message: "Enter the room id",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter the room id!";
        }
      },
    },
  ];

  return prompt(questions);
};

export const createRoomInquiries = () => {
  const questions: QuestionCollection = [
    {
      type: "input",
      name: "room_name",
      message: "Room name?",
      validate: (value) => {
        if (value.length) {
          return true;
        } else {
          return "Please enter a room name!";
        }
      },
    },
  ];
  return prompt(questions);
};

export const userInput = () => {
  const questions: QuestionCollection = [
    {
      type: "input",
      name: "message",
      message: ">",
    },
  ];
  return prompt(questions);
};
