import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { database } from "../../config/firebase";

// users collection reference
const usersCollectionRef = collection(database, "users");

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: "Error occured",
      });
    }
  };
};

const retrieveUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
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

export const addUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER,
    });

    try {
      await addDoc(usersCollectionRef, {
        first_name: "Ben",
        last_name: "bruce",
        phone: "1234567890",
        address_1: "123 Main St",
        address_2: "",
        town: "San Francisco",
        region: "CA",
        country: "US",
        post_code: "94107",
        contact_number: "1234567890",
      });

      const users = await retrieveUsers();
      console.log(users, "from add user function");

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
