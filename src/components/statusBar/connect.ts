import { MainState } from '../../store/pages/main/store';
import { RootState } from '../../config/config-store';
import { connect } from 'react-redux';
import StatusBar from './StatusBar';

export interface MappedProps extends MainState {}

const mapStateToProps = (state: RootState): MappedProps => ({
  ...state.app.page.main,
});

export const StatusBarConnected = connect(mapStateToProps, {})(StatusBar);
