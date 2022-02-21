import { combineReducers } from 'redux'
import repositoriesReducer from './repositoriesReducers'
import usersReducer from './usersReducers'

const reducers = combineReducers({
  repositories: repositoriesReducer,
  users: usersReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>