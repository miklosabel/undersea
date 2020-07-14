import { connect } from 'react-redux'
import { MainState } from '../../store/pages/main/store';
import { RootState } from '../../config/config-store';
import Main from './Main';

export interface MappedProps extends MainState {}

const mapStateToProps = (state: RootState): MappedProps => ({
  ...state.app.page.main,
})

export const MainConnected = connect(
  mapStateToProps,
  {}
)(Main);