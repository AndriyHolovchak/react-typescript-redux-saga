// Effects
import { spawn, all } from 'redux-saga/effects';

// Watchers
import auth from './auth/saga';

// Subroutines
export default function* root() {
  yield all([
    spawn(auth),
  ])
}