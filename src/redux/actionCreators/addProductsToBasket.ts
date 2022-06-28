import { ActionBasketTypes, Item } from "../actionTypes/actionBasketTypes";

export const addProductsToBasket = (payload: Item) => ({
  type: ActionBasketTypes.ADD_PRODUCT_TO_BASKET,
  payload
})

export const removeProductFromBasket = (payload: Item) => ({
  type: ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET,
  payload
})