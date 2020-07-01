import { connect } from 'react-redux';
import Login from './Login';
import { RootState } from '../../config/config-store';
import { LoginState } from '../../store/pages/login/store';
import { Dispatch, bindActionCreators } from 'redux';
import {
  ILoginActions,
  loginRequestActionCall,
} from '../../store/pages/login/action';
export interface MappedProps extends LoginState {}
const mapStateToProps = (state: RootState): MappedProps => ({
  ...state.app.page.login,
});
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      loginRequest: loginRequestActionCall,
    },
    dispatch
  );

export const LoginConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
