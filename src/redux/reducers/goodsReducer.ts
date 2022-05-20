import { Action, ActionTypes } from "../actionTypes"

export interface IGoods {
  [key: string]: string
}

interface IState {
  loading: boolean,
  goods?: Array<IGoods>,
  error?: string | null
}

const initializeState: IState = {
  loading: false,
  goods: [],
  error: null
}

export const goodsReducer = (state: IState = initializeState, action: Action):IState => {
  switch(action.type) {
    case ActionTypes.GET_GOODS_PENDING:
      return {
        loading: true
      }
    case ActionTypes.GET_GOODS_SUCCESS:
      return {
        loading: false,
        goods: action.payload
      }
    case ActionTypes.GET_GOODS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}