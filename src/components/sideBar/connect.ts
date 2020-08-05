import { resetApp } from '../../store';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

export interface DispatchProps {
  resetApp: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      resetApp: resetApp,
    },
    dispatch
  );

export const SidebarConnected = connect(null, mapDispatchToProps)(Sidebar);

