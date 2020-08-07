import { attackListInterface } from '../../mock/interface';
import { RootState } from '../../config/config-store';
import { Attacks } from './attack';
import { connect } from 'react-redux';

export interface MappedProps {
  units: {
    shark: number;
    seal: number;
    seahorse: number;
  };
  attackList: attackListInterface[];
}

const mapStateToProps = (state: RootState): MappedProps => {
  const { shark, seal, seahorse } = state.app.page.main.status;
  const units = {shark: shark, seal: seal, seahorse: seahorse}
  const attackList = state.app.page.main.attackList;
  return {
    units, 
    attackList,
  };
};

export const AttacksConnected = connect(mapStateToProps, {})(Attacks);
