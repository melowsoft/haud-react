import { ActionType } from "../action-types";
import { Action, User } from "../actions";
import { DocumentData } from "@firebase/firestore" 

interface UsersState {
  loading: boolean;
  error: string | null;
  data: DocumentData[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: UsersState = initialState,
  action: Action
): UsersState => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.ADD_USER:
      return { loading: true, error: null, data: [] };
    case ActionType.ADD_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.ADD_USER_ERROR:
      return { loading: false, error: action.payload, data: [...state.data] };
    case ActionType.EDIT_USER:
      return { loading: true, error: null, data: [] };
    case ActionType.EDIT_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.EDIT_USER_ERROR:
      return { loading: false, error: action.payload, data: [...state.data] };
    case ActionType.DELETE_USER:
      return { loading: true, error: null, data: [] };
    case ActionType.DELETE_USER_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.DELETE_USER_ERROR:
      return { loading: false, error: action.payload, data: [...state.data] };
    default:
      return state;
  }
};

export default reducer;
