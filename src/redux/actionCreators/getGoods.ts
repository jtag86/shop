import { Dispatch } from "redux"
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"; 
import { Action, ActionTypes} from '../actionTypes'
import { IGoods } from "../reducers/goodsReducer";

export const getGoods = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GET_GOODS_PENDING
    })

    try {
      const processors = await getDocs(collection(db, "PROCESSORS"))
      let arr: IGoods[] = []
      processors.forEach((item) => {
        arr.push(item.data())
      })
      dispatch({
        type: ActionTypes.GET_GOODS_SUCCESS,
        payload: arr
      })
    } catch(e) {
      dispatch({
        type: ActionTypes.GET_GOODS_FAIL,
        payload: (e as Error).message
      })
    }

  }
}