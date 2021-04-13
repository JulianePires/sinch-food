//Action types
export enum ContactsTypes {
  LOAD_REQUEST = "@contacts/LOAD_REQUEST",
  LOAD_SUCCESS = "@contacts/LOAD_SUCCESS",
  LOAD_FAILURE = "@contacts/LOAD_FAILURE",
  LOAD_CONTACTS = "@contacts/LOAD_CONTACTS",
  SET_SELECTED = "@contacts/SET_SELECTED",
}

//Data Types
export interface Contact {
  id: number;
  name: string;
  telephone: string;
  allChecked?: boolean;
}

//State Types
export interface ContactsState {
  readonly data: Contact[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly selected: Contact[];
}

//readonly torna imutável
