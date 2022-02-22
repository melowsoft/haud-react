import { ActionType } from "../action-types";
import {DocumentData} from "@firebase/firestore";

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
interface EditUserAction {
  type: ActionType.EDIT_USER;
}
interface EditUserActionSuccess {
  type: ActionType.EDIT_USER_SUCCESS;
  payload: DocumentData[];
}
interface EditUserActionError {
  type: ActionType.EDIT_USER_ERROR;
  payload: string;
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
interface DeleteUserAction {
  type: ActionType.DELETE_USER;
}
interface DeleteUserActionSuccess {
  type: ActionType.DELETE_USER_SUCCESS;
  payload: User[];
}
interface DeleteUserActionError {
  type: ActionType.DELETE_USER_ERROR;
  payload: string;
}


export type Action =
  | AddUserAction
  | AddUserActionSuccess
  | AddUserActionError
  | GetUsersAction
  | GetUsersActionSuccess
  | GetUsersActionError
  | EditUserAction
  | EditUserActionSuccess
  | EditUserActionError
  | DeleteUserAction
  | DeleteUserActionSuccess
  | DeleteUserActionError;
