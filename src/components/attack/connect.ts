import { attackListInterface } from '../../mock/interface';
import { RootState } from '../../config/config-store';
import { Attacks } from './attack';
import { connect } from 'react-redux';
import { unitSelectorId } from '../../mock/contants';

export interface MappedProps {
  units: unitInterface;
  attackList: attackListInterface[];
}

export type unitInterface={
  [key in keyof typeof unitSelectorId]:number
}
const mapStateToProps = (state: RootState): MappedProps => {
  const { shark, seal, seahorse } = state.app.page.main.status;
  const units = {shark, seal, seahorse}
  const attackList = state.app.page.main.attackList;
  return {
    units, 
    attackList,
  };
};

export const AttacksConnected = connect(mapStateToProps, {})(Attacks);