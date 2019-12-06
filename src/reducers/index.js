import { combineReducers } from "redux";
import side from "./side";
import guestForm from "./guestForm";
import company from "./company";

const rootReducer = combineReducers({
  side,
  guestForm,
  company
});

export default rootReducer;
