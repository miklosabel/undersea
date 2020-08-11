import { attackingArmyListInterface } from '../../mock/interface';
import { RootState } from '../../config/config-store';
import { Attacks } from './attack';
import { connect } from 'react-redux';
import { unitSelectorId } from '../../mock/contants';
import { Dispatch, bindActionCreators } from 'redux';
import { sendAttackActionCreator } from '../../store/pages/attacks/action';

export interface MappedProps {
  units: unitInterface;
  attackingArmyList: attackingArmyListInterface[];
}
export interface DispatchProps {
  sendAttack: (params: {
    shark: number;
    seal: number;
    seahorse: number;
    attackingArmyList: attackingArmyListInterface[];
  }) => void;
}

export type unitInterface = {
  [key in keyof typeof unitSelectorId]: number;
};
const mapStateToProps = (state: RootState): MappedProps => {
  const { shark, seal, seahorse } = state.app.page.main.status;
  const units = { shark, seal, seahorse };
  const attackingArmyList = state.app.page.main.attackingArmyList;
  return {
    units,
    attackingArmyList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ sendAttack: sendAttackActionCreator }, dispatch);

export const AttacksConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Attacks);
