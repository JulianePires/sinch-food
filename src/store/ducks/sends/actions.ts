import { Contact, Message } from "../messages/types";

export function addNewSend(contacts: Contact[], message: Message) {
  return {
    type: "NEW_SEND",
    payload: {
      contacts,
      message,
    },
  };
}
