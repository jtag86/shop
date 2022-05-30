import { ActionTypes } from "../actionTypes/actionProductTypes";

export const resetProducts = (type: string = 'every') => ({
  type: ActionTypes.RESET_PRODUCTS
})