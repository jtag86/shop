import { Action, ActionTypes } from "../actionTypes/actionProductTypes"

export interface IProducts {
  [key: string]: any
}

export interface IFeatureProducts {
  weekProducts: IProducts[],
  newProducts: IProducts[],
  favProducts: IProducts[],
}

interface IState {
  loading: boolean,
  products: Array<IProducts>,
  featuredProducts: IFeatureProducts,
  error: string | null,
  size: number
}

const initializeState: IState = {
  loading: true,
  products: [],
  featuredProducts: {
    weekProducts: [],
    newProducts: [],
    favProducts: [],
  },
  error: null,
  size: 0
}

export const productsReducer = (state = initializeState, action: Action):IState => {
  switch(action.type) {
    case ActionTypes.PRODUCTS_GEN_PENDING:
      return {
        loading: true,
        products: [],
        featuredProducts: {
          weekProducts: [],
          newProducts: [],
          favProducts: [],
        },
        size: 0,
        error: ""
      }

    case ActionTypes.PRODUCTS_GEN_FINISHED:
      return {
        loading: false,
        products: action.payload,
        featuredProducts: {
          weekProducts: action.weekProducts,
          newProducts: action.newProducts,
          favProducts: action.favProducts,
        },
        size: action.size,
        error: ""
      }
    case ActionTypes.PRODUCTS_RESET:
      return {
        loading: false,
        products: [],
        featuredProducts: {
          weekProducts: [],
          newProducts: [],
          favProducts: [],
        },
        size: 0,
        error: ""
      }
    default:
      return state
  }
}


