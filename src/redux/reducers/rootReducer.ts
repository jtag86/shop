import { combineReducers } from "redux"
import { goodsReducer } from "./goodsReducer"

export const rootReducer = combineReducers({
  goods: goodsReducer
})

export type RootState = ReturnType<typeof rootReducer>