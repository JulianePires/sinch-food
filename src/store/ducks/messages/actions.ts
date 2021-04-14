import { Contact, Message } from "./types";

export function addContactsToList(contact: Contact) {
  return {
    type: "ADD_CONTACT_TO_LIST",
    payload: {
      contact,
    },
  };
}

export function removeContactFromList(contact: Contact) {
  return {
    type: "REMOVE_CONTACT_FROM_LIST",
    payload: {
      contact,
    },
  };
}

export function setMessage(message: Message) {
  return {
    type: "SET_MESSAGE",
    payload: {
      message,
    },
  };
}
