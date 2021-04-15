import { Reducer } from "redux";
import Produce from "immer";
import { CheckboxState } from "./types";

const INITIAL_STATE: CheckboxState = {
  isSelected: false,
};

const reducer: Reducer<CheckboxState> = (state = INITIAL_STATE, action) => {
  return Produce(state, (draft) => {
    switch (action.type) {
      case "CHANGE_SELECTED":
        draft.isSelected = !draft.isSelected;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
