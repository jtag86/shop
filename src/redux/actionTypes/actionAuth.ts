export enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

interface signIn {
  type: ActionTypes.SIGN_IN
}

interface signOut {
  type: ActionTypes.SIGN_OUT
}

export type Action = signIn | signOut