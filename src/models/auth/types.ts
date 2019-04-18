// Describing the shape of the auth's slice of state
export interface AuthState {
  loggedIn: boolean;
  userName: string;
  pending?: boolean;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

// Describing the different ACTION NAMES available
export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const UPDATE_AUTH = 'UPDATE_AUTH';
export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';

interface SignInRequestAction {
  type: typeof SIGNIN_REQUEST;
  payload: AuthCredentials;
}

interface UpdateAuthAction {
  type: typeof UPDATE_AUTH;
  payload: AuthState;
}

interface SignOutRequestAction {
  type: typeof SIGN_OUT_REQUEST;
}

export type AuthActionTypes = SignInRequestAction | UpdateAuthAction | SignOutRequestAction;
