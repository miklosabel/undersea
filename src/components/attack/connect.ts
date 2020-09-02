import { AttackingArmyListInterface } from '../../mock/interface';
import { RootState } from '../../config/config-store';
import { Attacks } from './attack';
import { connect } from 'react-redux';
import { unitSelectorId } from '../../mock/constants';
import { Dispatch, bindActionCreators } from 'redux';
import { attackRequestActionCall } from '../../store/pages/attacks/action';

export interface MappedProps {
  units: unitInterface;
  attackingArmyList: AttackingArmyListInterface[];
}
export interface DispatchProps {
  sendAttack: (params: {
    shark: number;
    seal: number;
    seahorse: number;
    attackingArmyList: AttackingArmyListInterface[];
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
  bindActionCreators({ sendAttack: attackRequestActionCall }, dispatch);

export const AttacksConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Attacks);
