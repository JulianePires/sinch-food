import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { MessageState } from "./ducks/messages/types";
import { SendState } from "./ducks/sends/types";
import { ThemeState } from "./ducks/theme/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  messages: MessageState;
  sends: SendState;
  theme: ThemeState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
