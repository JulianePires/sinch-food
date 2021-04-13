import { Reducer } from "redux";
import { ContactsState, ContactsTypes } from "./types";

const INITIAL_STATE: ContactsState = {
  data: [],
  error: false,
  loading: false,
  selected: [],
};

const reducer: Reducer<ContactsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ContactsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ContactsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
