import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { MessageState } from "./ducks/messages/types";

import rootReducer from "./ducks/rootReducer";
import { CheckboxState } from "./ducks/checkboxes/types";

export interface ApplicationState {
  checkboxes: CheckboxState;
  messages: MessageState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
