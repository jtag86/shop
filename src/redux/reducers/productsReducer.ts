import { Action, ActionTypes } from "../actionTypes"

export interface IProducts {
  [key: string]: any
}

interface IState {
  loading: boolean,
  products?: Array<IProducts>,
  error?: string | null,
  size?: number
}

const initializeState: IState = {
  loading: false,
  products: [],
  error: null,
  size: 0
}

export const productsReducer = (state: IState = initializeState, action: Action):IState => {
  switch(action.type) {
    case ActionTypes.GET_PRODUCTS_PENDING:
      return {
        loading: true
      }
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        size: action.size
      }
    case ActionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}