import { Reducer } from "redux";
import { SendState } from "./types";

const INITIAL_STATE: SendState = {
  sends: [],
};

const reducer: Reducer<SendState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;