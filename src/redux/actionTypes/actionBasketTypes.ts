import { IProducts } from "../reducers/basketReducer";

export enum ActionBasketTypes {
  ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET',
  REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET'
}

export interface Item {
  product: IProducts,
	count: number,
}

interface actionBasketAdd {
  type: ActionBasketTypes.ADD_PRODUCT_TO_BASKET,
  payload: Item
}

interface actionBasketRemove {
  type: ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET,
  payload: Item
}

export type ActionBasket = actionBasketAdd | actionBasketRemove