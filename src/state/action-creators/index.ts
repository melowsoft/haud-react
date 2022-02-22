import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action, User } from "../actions";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { database } from "../../config/firebase";

// users collection reference
const usersCollectionRef = collection(database, "users");

const retrieveUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  const result = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return result as User[];
};

export const getUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_USERS,
    });

    try {
      const users = await retrieveUsers();
      dispatch({
        type: ActionType.GET_USERS_SUCCESS,
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: ActionType.GET_USERS_ERROR,
        payload: "Error occured",
      });
    }
  };
};

export const addUser = (user: User) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER,
    });

    try {
      console.log(user, "from user function");
      const addResult = await addDoc(usersCollectionRef, user);
      console.log(addResult, "result of users");

      const users = await retrieveUsers();
      dispatch({
        type: ActionType.ADD_USER_SUCCESS,
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_USER_ERROR,
        payload: "Error adding user",
      });
    }
  };
};
