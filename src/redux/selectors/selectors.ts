import { RootState } from "../reducers/rootReducer"

export const typeProductsSelector = (state: RootState, title: string) => {
  return state.products.products?.filter(item => item.title ===  title)
}

export const productSelector = (state: RootState, articul: string) => {
  return state.products.products?.filter(item => item.articul === articul).shift()
}

export const catalogSelector = (state: RootState, catalog: string) => {
  return state.products.products?.filter(item => item.catalog === catalog)
}