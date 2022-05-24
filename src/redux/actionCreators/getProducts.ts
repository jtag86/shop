import { Dispatch } from "redux"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"; 
import { Action, ActionTypes} from '../actionTypes'
import { IProducts } from "../reducers/productsReducer";

export const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_PENDING
    })

    try {
      const querySnapshot  = await getDocs(collection(db, "PROCESSORS"));

      let arr: IProducts[] = []

      querySnapshot.forEach((item) => {
        const data = item.data()
        arr.push(JSON.parse(data.str))
      })
      dispatch({
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: arr,
        size: querySnapshot.size
      })
    } catch(e) {
      dispatch({
        type: ActionTypes.GET_PRODUCTS_FAIL,
        payload: (e as Error).message
      })
    }

  }
}