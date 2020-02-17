import { combineReducers } from "redux";
import chatSimulateReducer from "./Reducer-AddUser";

const MasterReducer = combineReducers({
  chatSimulateReducer
});

export default MasterReducer;
