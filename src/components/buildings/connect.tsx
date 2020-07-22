import { RootState } from '../../config/config-store';
import { Dispatch, bindActionCreators } from 'redux';
import { Buildings } from './buildings';
import { connect } from 'react-redux';
import { startBuildActionCreator } from '../../store/pages/buildings/action';

export interface MappedProps {
  atollFortress: number;
  flowController: number;
  isAtollFortressBuilding: boolean;
  isFlowControllerBuilding: boolean;
  shell: number;
}
export interface DispatchProps {
  startBuild: (params: {
    shell: number;
    isAtollFortressBuilding: boolean;
    isFlowControllerBuilding: boolean;
    nextPossibleRoundToBuild: number;
  }) => void;
}

const mapStateToProps = (state: RootState): MappedProps => {
  const {
    atollFortress,
    flowController,
    isAtollFortressBuilding,
    isFlowControllerBuilding,
    shell
  } = state.app.page.main.status;

  return {
    atollFortress,
    flowController,
    isAtollFortressBuilding,
    isFlowControllerBuilding,
    shell,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ startBuild: startBuildActionCreator }, dispatch);

export const BuildingsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buildings);
