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
    case ActionTypes.PRODUCTS_GENERATING:
      return {
        loading: false,
        products: action.payload,
        size: action.size,
        error: ""
      }
    case ActionTypes.PRODUCTS_RESET:
      return {
        loading: false,
        products: [],
        size: 0,
        error: ""
      }
    default:
      return state
  }
}