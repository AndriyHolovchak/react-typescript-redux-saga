import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './models/store';
import history from "./history";
import { setAuthHeader } from './utils/authHeaderHelper';
import routes from './routes';
import './App.scss';


const token = localStorage.token;
const userName = localStorage.userName;
let defaultState = {};
if (token) {
  // Set auth header
  setAuthHeader(token);
  defaultState = {
    auth: {
      loggedIn: true,
      pending: false,
      userName,
    }
  }
}

const store = createStore(defaultState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {routes(history)}
        </div>
      </Provider>
    );
  }
}

export default App;
