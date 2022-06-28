import { ActionBasket, ActionBasketTypes } from "../actionTypes/actionBasketTypes"


export interface IProducts {
  [key: string]: any
}

export interface Item {
	product: IProducts,
	count: number,
	totalCost: number,
}

interface IState {
  items: Item[],
	basketCost: number
}

const initializeState: IState = {
  items: [],
	basketCost: 0
}

export const basketReducer = (state = initializeState, action: ActionBasket): IState => {
  switch(action.type) {
    case ActionBasketTypes.ADD_PRODUCT_TO_BASKET:
		if(state.items.length === 0) {
 			const cost = action.payload.count * action.payload.product.cost
			return {
				items: [{
					product: action.payload.product,
					count: action.payload.count,
					totalCost: cost
				}],
				basketCost: cost
			}
			
		} else {
			const index = state.items.findIndex(item => item.product.articul === action.payload.product.articul)
			
			if(index !== -1) {
				const newArray = [...state.items]
				
				const count = newArray[index].count + action.payload.count
				const cost = count * newArray[index].product.cost
				newArray[index].count = count
				newArray[index].totalCost = cost
				return {
					items: [...newArray],
					basketCost: state.basketCost + action.payload.count * action.payload.product.cost
				}
			}
			
			return {
				items: [
					...state.items, 
					{
						product: action.payload.product,
						count: action.payload.count,
						totalCost: action.payload.count * action.payload.product.cost
					}
				],
				basketCost: state.basketCost + action.payload.count * action.payload.product.cost
			}
		}

    case ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET: 
			const index = state.items.findIndex(item => item.product.articul === action.payload.product.articul)
      return {
        items: [
					...state.items.slice(0, index),
					...state.items.slice(index + 1)
				],
				basketCost: state.basketCost - action.payload.count * action.payload.product.cost
      }
    default: 
      return state
  }
}