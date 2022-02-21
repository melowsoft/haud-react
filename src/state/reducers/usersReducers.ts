import { ActionType } from "../action-types";
import { Action } from "../actions"

interface UsersState {
  loading: boolean;
  error: string | null;
  data: any[]
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: UsersState = initialState, action: Action
  ): UsersState => {
     switch (action.type) {
        case ActionType.ADD_USER:
          return { loading: true, error: null, data: [] }
        case ActionType.ADD_USER_SUCCESS:
          return { loading: false, error: null, data: action.payload }
        case ActionType.ADD_USER_ERROR:
          return { loading: false, error: action.payload, data: [] }
        default:
          return state;
     } 
}

export default reducer;