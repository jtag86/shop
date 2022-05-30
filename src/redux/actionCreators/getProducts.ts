import { Dispatch } from "redux"
import { Action, ActionTypes} from '../actionTypes/actionProductTypes'
import { IProducts } from "../reducers/productsReducer";

export const getProducts = (type: string = "every") => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_PENDING
    })

    try {

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