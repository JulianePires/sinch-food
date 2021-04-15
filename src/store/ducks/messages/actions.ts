import { Message } from "./types";


export function addContactsToList(id: number, name: string, telephone: string) {
  return {
    type: "ADD_CONTACT_TO_LIST",
    payload: {
      id,
      name,
      telephone,
    },
  };
}

export function removeContactFromList(id: number) {
  return {
    type: "REMOVE_CONTACT_FROM_LIST",
    payload: {
      id,
    },
  };
}

export function pushSend(message: Message) {
  return {
    type: "PUSH_SEND",
    payload: {
      message,
    },
  };
}
