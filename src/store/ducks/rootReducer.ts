import { combineReducers } from "redux";

import messages from "./messages";
import sends from "./sends";
import theme from "./theme";

export default combineReducers({
  messages,
  sends,
  theme,
});
