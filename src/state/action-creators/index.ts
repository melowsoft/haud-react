import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action, User } from "../actions";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { database } from "../../config/firebase";

// users collection reference
const usersCollectionRef = collection(database, "users");

// export const searchRepositories = (term: string) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.SEARCH_REPOSITORIES,
//     });

//     try {
//       const { data } = await axios.get(
//         "https://registry.npmjs.org/-/v1/search",
//         {
//           params: {
//             text: term,
//           },
//         }
//       );

//       const names = data.objects.map((result: any) => {
//         return result.package.name;
//       });

//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
//         payload: names,
//       });
//     } catch (err) {
//       dispatch({
//         type: ActionType.SEARCH_REPOSITORIES_ERROR,
//         payload: "Error occured",
//       });
//     }
//   };
// };

const retrieveUsers = async () => {
  const data = await getDocs(usersCollectionRef);
  const result = data.docs.map((doc) => ({ ...doc.data() }));
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
  console.log("i am getting called");
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER,
    });

    try {
      console.log(user, "from user function");
      await addDoc(usersCollectionRef, user);

      const users = await retrieveUsers();
      console.log(users, "result of users");
      dispatch({
        type: ActionType.ADD_USER_SUCCESS,
        payload: users,
      });
    } catch (err) {
      console.log(err, "error message");
      dispatch({
        type: ActionType.ADD_USER_ERROR,
        payload: "Error adding user",
      });
    }
  };
};
