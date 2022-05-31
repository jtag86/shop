import { Action, ActionTypes } from "../actionTypes/actionProductTypes"

export interface IProducts {
  [key: string]: any
}

interface IState {
  loading: boolean,
  products: Array<IProducts>,
  error: string | null,
  size: number
}

const initializeState: IState = {
  loading: true,
  products: [],
  error: null,
  size: 0
}

export const productsReducer = (state = initializeState, action: Action):IState => {
  switch(action.type) {
    case ActionTypes.GET_PRODUCTS_PENDING:
      return {
        loading: true,
        products: [],
        size: 0,
        error: ""
      }
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
        size: action.size,
        error: ""
      }
    case ActionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: true,
        products: [],
        size: 0,
        error: action.payload
      }
    case ActionTypes.PRODUCTS_GENERATING:
      return {
        loading: false,
        products: action.payload,
        size: 0,
        error: ""
      }
    default:
      return state
  }
}