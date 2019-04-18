import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../models/store';
import * as auth_a from '../models/auth/actions';
import AppSideBar from '../components/AppSideBar';

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  userName: string;
  component: any;
  signOut: typeof auth_a.signOutRequest;
}

const ProtectedRoute: React.SFC<ProtectedRouteProps> = ({
  component: Component,
  isAuthenticated,
  signOut,
  userName,
  ...rest
}) => {
  return !isAuthenticated ? <Redirect to={{ pathname: '/login' }} /> : <Route {...rest} render={matchProps => (
    <div className="main-layout">
      <AppSideBar onSignOutClick={signOut} userName={userName}/>
      <div className="main-container">
        <Component {...matchProps} />
      </div>
    </div>
  )} />;
}

const mapActionToProps = {
  signOut: auth_a.signOutRequest,
};

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.auth.loggedIn,
  userName: state.auth.userName
});

export default connect(mapStateToProps, mapActionToProps)(ProtectedRoute);
