import { combineReducers } from "redux";
import { reducer as auth } from "./auth";

export const rootReducer = combineReducers({
  auth,
});
