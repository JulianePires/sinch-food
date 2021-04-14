import { Reducer } from "redux";
import { SendState } from "./types";
import { Contact } from "../messages/types";

import Produce from "immer";

const INITIAL_STATE: SendState = {
  sends: [],
};

const reducer: Reducer<SendState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEW_SEND":
      const { contacts, message } = action.payload;
      return Produce(state, (draft) => {
        contacts.forEach((contact: Contact) => {
          draft.sends.push({
            contact: contact,
            message: message,
          });
        });
      });
    default:
      return state;
  }
};

export default reducer;
