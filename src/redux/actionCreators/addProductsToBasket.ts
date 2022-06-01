import { ActionBasketTypes } from "../actionTypes/actionBasketTypes";
import { IProducts } from "../reducers/basketReducer";
export const addProductsToBasket = (payload: IProducts) => ({
  type: ActionBasketTypes.ADD_PRODUCT_TO_BASKET,
  payload
})

export const removeProductFromBasket = (payload: string) => ({
  type: ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET,
  payload
})