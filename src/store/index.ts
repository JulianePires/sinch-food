import { createStore, Store, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { MessageState } from "./ducks/messages/types";
import { SendState } from "./ducks/sends/types";
import { ThemeState } from "./ducks/theme/types";

import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  messages: MessageState;
  sends: SendState;
  theme: ThemeState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
