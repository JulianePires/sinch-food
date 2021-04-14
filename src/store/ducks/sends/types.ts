import { Contact, Message } from "../messages/types";

export interface Send {
  Contact: Contact[];
  Message: Message;
}

export interface SendState {
  readonly sends: Send[];
}