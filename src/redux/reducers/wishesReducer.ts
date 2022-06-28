import { Action, ActionTypes } from "../actionTypes/actionWishes"

export interface IWishes {
  wishes: number
}

const initializeState: IWishes = {
  wishes: 15
}

export const wishesReducer = (state = initializeState, action: Action): IWishes => {
  switch(action.type) {
    case ActionTypes.ADD_WISHES:
      return {
        wishes: state.wishes + 1
      }
    case ActionTypes.SUB_WISHES:
      return {
        wishes: state.wishes - 1
      }
    default:
      return state
  }
}