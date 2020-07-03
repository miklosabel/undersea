import { connect } from 'react-redux';
import Login from './Login';
import { RootState } from '../../config/config-store';
import { LoginState } from '../../store/pages/login/store';
import { Dispatch, bindActionCreators } from 'redux';
import { loginRequestActionCall } from '../../store/pages/login/action';
export interface MappedProps extends LoginState {}
export interface DispatchProps {
  loginRequest: (params: { name: string; password: string }) => void;
}
const mapStateToProps = (state: RootState): MappedProps => ({
  ...state.app.page.login,
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
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
