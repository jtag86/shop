import { ActionBasket, ActionBasketTypes } from "../actionTypes/actionBasketTypes"


export interface IProducts {
  [key: string]: any
}

interface IState {
  products: Array<IProducts>,
}

const initializeState: IState = {
  products: []
}

export const basketReducer = (state = initializeState, action: ActionBasket): IState => {
  switch(action.type) {
    case ActionBasketTypes.ADD_PRODUCT_TO_BASKET:
      return {
        products: [...state.products, action.payload]
      }
    case ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET: 
      const temp = state.products.filter(item => item.articul !== action.payload)
      return {
        products: [...temp]
      }
    default: 
      return state
  }
}