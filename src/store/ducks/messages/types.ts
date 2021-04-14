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

//State Types
export interface MessageState {
  readonly selected: Contact[];
  readonly message: Message;
}

//readonly torna imutável
