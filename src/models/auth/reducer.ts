// import * as actions from './actions';

import {
  AuthState,
  AuthActionTypes,
  SIGNIN_REQUEST,
  UPDATE_AUTH
} from './types';

const initialState: AuthState = {
  loggedIn: false,
  userName: '',
  pending: false,
}

export default function reducer(state = initialState, action: AuthActionTypes) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        pending: true
      }
    case UPDATE_AUTH:
      return {
        ...state,
        ...action.payload,
        pending: false,
      }
    default:
      return state
  }
}
