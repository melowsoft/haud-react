import axios from 'axios';
import { Dispatch } from "redux"
import { ActionType } from '../action-types';
import { Action } from "../actions"
import { collection, getDocs, addDoc } from "@firebase/firestore"
import { database } from '../../config/firebase';

// users collection reference
const usersCollectionRef = collection(database, 'users')

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    })

    try {
      const {data} = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      })

     const names = data.objects.map((result: any) => {
        return result.package.name;
      });

     dispatch({
       type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
       payload: names
     }) 

    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: "Error occured"
      })
    }
  }
}

export const addUser = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER
    })

    try {
   
      const data = await addDoc(usersCollectionRef, {
        first_name: "christine",
        last_name: "like",
        email: "chris@mark.com",
        phone: "1234567890",
        address_1: "123 Main St",
        address_2: "",
        town: "San Francisco",
        region: "CA",
        country: "US",
        post_code: "94107",
        contact_number: "1234567890",
      })

      console.log(data, "from add user function")
      

    //  dispatch({
    //   type: ActionType.ADD_USER_SUCCESS,
    //   payload: data
    // }) 

    } catch (err) {
      dispatch({
        type: ActionType.ADD_USER_ERROR,
        payload: "Error adding user"
      })
    }
  }
}