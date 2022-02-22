import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action, User } from "../actions";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  DocumentData,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";
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
      //retrieve  users
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
      const addResult = await addDoc(usersCollectionRef, user);
      console.log(addResult, "result of users");

      //retrieve updated users
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

export const editUser = (updatedUser: DocumentData, id: any) => {
  console.log(id, "before call")
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.EDIT_USER,
    });

    try {
      const docRef = doc(database, "users", id);
      await updateDoc(docRef, updatedUser);
  
      //retrieve updated users
      const users = await retrieveUsers();
      dispatch({
        type: ActionType.EDIT_USER_SUCCESS,
        payload: users,
      });
    } catch (err) {
      console.log(err, "error in edit user")
      dispatch({
        type: ActionType.EDIT_USER_ERROR,
        payload: "Error adding user",
      });
    }
  };
};

export const deleteUser = (id: any) => {
  console.log(id, "before call")
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_USER,
    });

    try {
      const docRef = doc(database, "users", id);
      await deleteDoc(docRef);
  
      //retrieve updated users
      const users = await retrieveUsers();
      dispatch({
        type: ActionType.DELETE_USER_SUCCESS,
        payload: users,
      });
    } catch (err) {
      console.log(err, "error in edit user")
      dispatch({
        type: ActionType.DELETE_USER_ERROR,
        payload: "Error adding user",
      });
    }
  };
};
