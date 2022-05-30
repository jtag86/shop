import { IProducts } from "../reducers/productsReducer"

export enum ActionTypes {
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL',
  RESET_PRODUCTS = 'RESET_PRODUCTS'
}

interface actionReset {
  type: ActionTypes.RESET_PRODUCTS
}

interface actionPending {
  type: ActionTypes.GET_PRODUCTS_PENDING
}

interface actionSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS,
  payload: Array<IProducts>,
  size: number
}

interface actionFail {
  type: ActionTypes.GET_PRODUCTS_FAIL,
  payload: string
}

export type Action = actionPending | actionSuccess | actionFail | actionReset