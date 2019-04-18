import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as actions from './actions';
import { SIGNIN_REQUEST, SIGN_OUT_REQUEST } from './types';
import history from '../../history';
import { setAuthHeader, deleteAuthHeader } from '../../utils/authHeaderHelper';

function* signInFlow(action: any) {
  // TODO - show spinner;
  try {
    const { email, password } = action.payload;
    // const body = { email, password };
    // const res = yield call(signInApi, body);

    // TODO - Remove it after integration with API
    const res = { token: '12345', userName: email };
    localStorage.setItem("token", res.token);
    localStorage.setItem("userName", res.userName);
    yield call(setAuthHeader, res.token);
    yield put(actions.updateAuth({ loggedIn: true, userName: email }));
    history.push('/');
  } catch (e) {
    // TODO - show error;
    yield call(deleteAuthHeader);
    yield put(actions.updateAuth({ loggedIn: false, userName: '', pending: false }));
  } finally {
    // TODO - hide spinner;
  }
}

function* signOutFlow() {
  localStorage.clear();
  yield call(deleteAuthHeader);
  yield put(actions.updateAuth({ loggedIn: false, userName: '' }));
  history.push('/login');
}

export default function* watcher() {
  yield all([
    takeLatest(SIGNIN_REQUEST, signInFlow),
    takeLatest(SIGN_OUT_REQUEST, signOutFlow),
  ]);
}