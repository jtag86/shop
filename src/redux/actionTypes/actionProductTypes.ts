import { IProducts } from "../reducers/productsReducer"

export enum ActionTypes {
  GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL',
  PRODUCTS_GEN_PENDING = 'PRODUCTS_PENDING',
  PRODUCTS_GEN_FINISHED = 'PRODUCTS_GEN_FINISHED',
  PRODUCTS_RESET = 'PRODUCTS_RESET',
}

interface actionGenPending {
  type: ActionTypes.PRODUCTS_GEN_PENDING
}

interface actionGen {
  type: ActionTypes.PRODUCTS_GEN_FINISHED,
  payload: IProducts[],
  weekProducts: IProducts[],
  newProducts: IProducts[],
  favProducts: IProducts[],
  bannerProducts: IProducts[],
  trendProducts: IProducts[],
  size: number
}

interface actionReset {
  type: ActionTypes.PRODUCTS_RESET,
  payload: Array<IProducts>,
  size: 0
}


export type Action =  actionGenPending | actionGen | actionReset