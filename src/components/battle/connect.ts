import { AttackingArmyListInterface } from '../../mock/interface';
import { RootState } from '../../config/config-store';
import { connect } from 'react-redux';
import { Battle } from './battle';

export interface MappedProps {
  attackingArmyList: AttackingArmyListInterface[];
}

const mapStateToProps = (state: RootState): MappedProps => {
  const attackingArmyList = state.app.page.main.attackingArmyList;
  return { attackingArmyList };
};

export const BattleConnected = connect(mapStateToProps, {})(Battle);
