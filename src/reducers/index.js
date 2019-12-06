import { combineReducers } from "redux";
import side from "./side";
import guestForm from "./guestForm";

const rootReducer = combineReducers({
  side,
  guestForm
});

export default rootReducer;
