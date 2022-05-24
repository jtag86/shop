import { RootState } from "../reducers/rootReducer"

export const getProductSelector = (state: RootState, id: string) => {
  return state.products.products?.filter(item =>  item.articul === id )
}