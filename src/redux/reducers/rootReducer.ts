import { combineReducers } from "redux"
import { basketReducer } from "./basketReducer"
import { productsReducer } from "./productsReducer"

export const rootReducer = combineReducers({
  products: productsReducer,
  basket: basketReducer
})

export type RootState = ReturnType<typeof rootReducer>