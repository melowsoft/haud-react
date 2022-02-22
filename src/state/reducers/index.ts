import { combineReducers } from "redux";
import usersReducer from "./usersReducers";

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
