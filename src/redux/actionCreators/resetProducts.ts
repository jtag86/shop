import { Action, ActionTypes} from '../actionTypes/actionProductTypes'

export const resetProducts = () => ({
    type: ActionTypes.PRODUCTS_RESET,
    payload: [],
    size: 0
})