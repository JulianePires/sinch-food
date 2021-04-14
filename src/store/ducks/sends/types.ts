import { Contact, Message } from "../messages/types";

export interface Send {
  contact: Contact;
  message: Message;
}

export interface SendState {
  readonly sends: Send[];
}
