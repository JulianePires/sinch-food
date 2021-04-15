import { combineReducers } from "redux";

import messages from "./messages";
import checkboxes from "./checkboxes";

export default combineReducers({
  messages,
  checkboxes,
});
