import { connect } from 'react-redux';
import { AppState } from '../../models/store';
import * as auth_a from '../../models/auth/actions';

const mapActionToProps = {
  signInRequest: auth_a.signInRequest,
};

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: state.auth.loggedIn,
  userName: state.auth.userName,
});

export default connect(mapStateToProps, mapActionToProps);
