import { RootState } from '../../config/config-store';
import { Dispatch, bindActionCreators } from 'redux';
import { Buildings } from './buildings';
import { connect } from 'react-redux';

export interface MappedProps {
  atollFortress: number;
  flowController: number;
  isAtollFortressBuilding: boolean;
  isFlowControllerBuilding: boolean;
  shell: number
}
export interface DispatchProps {}

const mapStateToProps = (state: RootState): MappedProps => {
  const {
    atollFortress,
    flowController,
    isAtollFortressBuilding,
    isFlowControllerBuilding,
    shell,
  } = state.app.page.main.status;
  return {
    atollFortress,
    flowController,
    isAtollFortressBuilding,
    isFlowControllerBuilding,
    shell,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => bindActionCreators(
  {}, dispatch
);

export const BuildingsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buildings)