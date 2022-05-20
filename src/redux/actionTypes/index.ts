import { IGoods } from "../reducers/goodsReducer"

export enum ActionTypes {
  GET_GOODS_PENDING = 'GET_GOODS_PENDING',
  GET_GOODS_SUCCESS = 'GET_GOODS_SUCCESS',
  GET_GOODS_FAIL = 'GET_GOODS_FAIL'
}

interface actionPending {
  type: ActionTypes.GET_GOODS_PENDING
}

interface actionSuccess {
  type: ActionTypes.GET_GOODS_SUCCESS,
  payload: Array<IGoods>
}

interface actionFail {
  type: ActionTypes.GET_GOODS_FAIL,
  payload: string
}

export type Action = actionPending | actionSuccess | actionFail