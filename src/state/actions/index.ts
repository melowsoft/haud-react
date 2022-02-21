import { ActionType } from "../action-types"

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
interface AddUserAction {
  type: ActionType.ADD_USER;
}
interface AddUserActionSuccess {
  type: ActionType.ADD_USER_SUCCESS;
  payload: string[];
}
interface AddUserActionError {
  type: ActionType.ADD_USER_ERROR;
  payload: string;
}

export type Action =   
| SearchRepositoriesAction 
| SearchRepositoriesSuccessAction 
| SearchRepositoriesErrorAction
| AddUserAction
| AddUserActionSuccess
| AddUserActionError;