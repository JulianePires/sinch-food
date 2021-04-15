import { Reducer } from "redux";
import Produce from "immer";
import { MessageState } from "./types";

const INITIAL_STATE: MessageState = {
  selected: [],
  message: {
    content: "",
    template: "",
    comida: "",
  },
  sends: [],
};

const reducer: Reducer<MessageState> = (state = INITIAL_STATE, action) => {
  return Produce(state, (draft) => {
    switch (action.type) {
      case "ADD_CONTACT_TO_LIST":
        const { id, name, telephone } = action.payload;
        const newContact = {
          id: id,
          name: name,
          telephone: telephone,
        };
        draft.selected.push(newContact);
        break;
      case "REMOVE_CONTACT_FROM_LIST":
        draft.selected.splice(action.payload, 1);
        break;
      case "PUSH_SEND":
        const { message } = action.payload;
        draft.message.comida = message.comida;
        draft.message.template = message.template;
        draft.message.content = message.content;
        state.selected.forEach((cont) => {
          const newSend = {
            contact: {
              id: cont.id,
              name: cont.name,
              telephone: cont.telephone,
            },
            message: draft.message,
          };
          draft.sends.push(newSend);
        });
        break;
      default:
        return state;
    }
  });
};

export default reducer;
