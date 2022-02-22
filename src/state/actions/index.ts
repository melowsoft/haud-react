import { ActionType } from "../action-types";

export interface User {
  id?: string | number;
  first_name: string;
  last_name: string;
  address_1: string;
  address_2: string;
  town: string;
  region: string;
  country: string;
  post_code: string;
  contact_number: string;
}
interface AddUserAction {
  type: ActionType.ADD_USER;
}
interface AddUserActionSuccess {
  type: ActionType.ADD_USER_SUCCESS;
  payload: User[];
}
interface AddUserActionError {
  type: ActionType.ADD_USER_ERROR;
  payload: string;
}
interface GetUsersAction {
  type: ActionType.GET_USERS;
}
interface GetUsersActionSuccess {
  type: ActionType.GET_USERS_SUCCESS;
  payload: User[];
}
interface GetUsersActionError {
  type: ActionType.GET_USERS_ERROR;
  payload: string;
}

export type Action =
  | AddUserAction
  | AddUserActionSuccess
  | AddUserActionError
  | GetUsersAction
  | GetUsersActionSuccess
  | GetUsersActionError;
