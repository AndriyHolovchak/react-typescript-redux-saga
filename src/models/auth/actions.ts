import { AuthState, AuthCredentials, UPDATE_AUTH, SIGNIN_REQUEST, AuthActionTypes, SIGN_OUT_REQUEST } from './types';

export const signInRequest = (creds: AuthCredentials): AuthActionTypes => {
  return {
    type: SIGNIN_REQUEST,
    payload: creds,
  }
}

export const updateAuth = (newAuth: AuthState): AuthActionTypes => {
  return {
    type: UPDATE_AUTH,
    payload: newAuth,
  }
}

export const signOutRequest = (): AuthActionTypes => {
  return {
    type: SIGN_OUT_REQUEST,
  }
}
