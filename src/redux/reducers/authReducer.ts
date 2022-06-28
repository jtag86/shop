import { Action, ActionTypes } from '../actionTypes/actionAuth'

export interface IState  {
  auth: boolean
}

const initializeState: IState = {
  auth: false
}

export const authReducer = (state = initializeState, action: Action): IState => {
  switch(action.type) {
    case ActionTypes.SIGN_IN:
      return {
        auth: true
      }
    case ActionTypes.SIGN_OUT:
      return {
        auth: false
      }
    default:
      return state
  }
}