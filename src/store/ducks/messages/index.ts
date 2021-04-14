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
};

const reducer: Reducer<MessageState> = (state = INITIAL_STATE, action) => {
  return Produce(state, (draft) => {
    switch (action.type) {
      case "ADD_CONTACT_TO_LIST":
        draft.selected.push(action.payload);
        break;
      case "REMOVE_CONTACT_FROM_LIST":
        draft.selected.splice(action.payload.id, 1);
        break;
      case "SET_MESSAGE":
        const { message } = action.payload;
        draft.message.comida = message.comida;
        draft.message.template = message.template;
        draft.message.content = message.content;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
