import React, { Component } from 'react';
import { signInRequest } from '../../models/auth/actions';
import './index.scss';

interface LoginProps {
  signInRequest: typeof signInRequest;
  userName: string;
  isLoggedIn: boolean;
}

export default class Login extends Component<LoginProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  handleFormSubmit() {
    const { email, password } = this.state;
    if (email && password) {
      this.props.signInRequest({
        email,
        password,
      });
    } else {
      alert('E-mail and password are required fields');
    }
  }

  onInputChange(e: any) {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim()
    });
  }

  render() {
    const { isLoggedIn, userName } = this.props;
    const { email, password } = this.state;
    return (
      <div className="login-page">
        <h3>{isLoggedIn ? `Hello ${userName}!` : 'Please login'}</h3>
        <form>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={this.onInputChange}>
          </input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.onInputChange}>
          </input>
          <button type="button" onClick={() => this.handleFormSubmit()}>Login</button>
        </form>
      </div>
    )
  }
}
