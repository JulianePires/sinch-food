//Data Types
export interface Contact {
  id: number;
  name: string;
  telephone: string;
}

export interface Message {
  content: string;
  template: string;
  comida: string;
}

export interface Send {
  contact: Contact;
  message: Message;
}

//State Types
export interface MessageState {
  readonly selected: Contact[];
  readonly message: Message;
  readonly sends: Send[];
}

//readonly torna imutável
