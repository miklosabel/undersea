import AuthComponent from './Auth';
import { RootState } from '../../config/config-store';
import { push } from 'connected-react-router';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface MappedProps {
  isLoading: boolean;
  isConnected: boolean;
  error: string;
}
export interface DispatchProps {
  pushState: typeof push;
}
const mapStateToProps = (state: RootState): MappedProps => {
  const { data, isLoading, error } = state.app.page.login;
  return {
    error,
    isLoading,
    isConnected: data.isConnected,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      pushState: push,
    },
    dispatch
  );

export const AuthComponentConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
