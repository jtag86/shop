import { combineReducers } from "redux"
import { basketReducer } from "./basketReducer"
import { productsReducer } from "./productsReducer"
import { wishesReducer } from "./wishesReducer"

export const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer,
  wishes: wishesReducer
})

export type RootState = ReturnType<typeof rootReducer>