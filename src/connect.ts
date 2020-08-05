import { bindActionCreators, Dispatch } from 'redux';
import { loginInitActionCall } from './store/pages/login/action';
import App from './App';
import { connect } from 'react-redux';

//Init actionhöz connect
export interface DispatchProps {
  init: (isConnected: boolean) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      init: loginInitActionCall,
    },
    dispatch
  );

export const AppConnected = connect(null, mapDispatchToProps)(App);
