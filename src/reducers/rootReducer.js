import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import charReducer from "./charReducer";
import episodesReducer from "./episodesReducer";
import locationReducer from "./locationReducer";

const appReducer = combineReducers({
  login__state: loginReducer,
  char__state: charReducer,
  episode__state: episodesReducer,
  location__state: locationReducer,
});

const rootReducer = (state, action) => {
  //to get everything cleaned after logout
  // if (action.type === "logout__done") {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

export default rootReducer;
