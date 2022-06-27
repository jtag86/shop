import { ActionBasket, ActionBasketTypes } from "../actionTypes/actionBasketTypes"


export interface IProducts {
  [key: string]: any
}

export interface Item {
	product: IProducts,
	count: number
}

interface IState {
  items: Item[],
}

const initializeState: IState = {
  items: []
}

export const basketReducer = (state = initializeState, action: ActionBasket): IState => {
  switch(action.type) {
    case ActionBasketTypes.ADD_PRODUCT_TO_BASKET:
		if(state.items.length === 0) {
			console.log("Корзина пуста")
			return {
				items: [action.payload]
			}
			
		} else {
			const index = state.items.findIndex(item => {
				console.log(item.product.articul, action.payload.product.articul)
				return item.product.articul === action.payload.product.articul
			})
			
			if(index !== -1) {
				console.log("Надено совпадение")
				const newArray = [...state.items]
				newArray[index] = action.payload
				console.log(index)
			}
			

			
			
			return {
				items: []
			}
		}
	
		//
		
        //items: [...state.items, {product: action.payload.product, count: action.payload.count }]

    case ActionBasketTypes.REMOVE_PRODUCT_FROM_BASKET: 
      //const temp = state.products.filter(item => item.articul !== action.payload)
      return {
        items: []
      }
    default: 
      return state
  }
}