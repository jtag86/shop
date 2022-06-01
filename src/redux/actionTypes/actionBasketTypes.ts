import { IProducts } from "../reducers/productsReducer";

export enum ActionBasketTypes {
  ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET',
  REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET'
}

interface actionBasketAdd {
  type: ActionBasketTypes.ADD_PRODUCT_TO_BASKET,
  payload: IProducts
}

interface actionBasketRemove {
  type: ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET,
  payload: number
}

export type ActionBasket = actionBasketAdd | actionBasketRemove