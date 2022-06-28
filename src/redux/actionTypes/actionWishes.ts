export enum ActionTypes {
  ADD_WISHES = 'ADD_WISHES',
  SUB_WISHES = 'SUB_WISHES',
}

interface actionAddWishes {
  type: ActionTypes.ADD_WISHES
}

interface actionSubWishes {
  type: ActionTypes.SUB_WISHES
}

export type Action = actionAddWishes | actionSubWishes