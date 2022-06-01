import { IProducts } from "../reducers/productsReducer"

export enum ActionTypes {
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL',
  PRODUCTS_GENERATING = 'PRODUCTS_GENERATING',
  PRODUCTS_RESET = 'PRODUCTS_RESET'
}

interface actionGen {
  type: ActionTypes.PRODUCTS_GENERATING,
  payload: Array<IProducts>,
  size: number
}

interface actionReset {
  type: ActionTypes.PRODUCTS_RESET,
  payload: Array<IProducts>,
  size: 0
}


export type Action =  actionGen | actionReset