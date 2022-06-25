import { IProducts } from "../reducers/productsReducer";

export enum ActionCatalogTypes {
  ADD_PRODUCTS_TO_CATALOG = 'ADD_PRODUCTS_TO_CATALOG'
}

interface actionCatalogAdd {
  type: ActionCatalogTypes.ADD_PRODUCTS_TO_CATALOG,
  payload: IProducts[]
}

export type ActionCatalog = actionCatalogAdd