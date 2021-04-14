import { Reducer } from "redux";
import Produce from "immer";
import { ThemeState } from "./types";

const INITIAL_STATE: ThemeState = {
  selectedTheme: "light",
};

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const { theme } = action.payload;
      return Produce(state, (draft) => {
        draft.selectedTheme = theme;
      });
    default:
      return state;
  }
};

export default reducer;
