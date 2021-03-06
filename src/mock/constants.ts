import {
  BuildingInterface,
  UnitSelectorInterface,
  DisplayListElement,
} from './interface';
import atollFortressImage from '../assets/atollfortress.png';
import flowControllerImage from '../assets/flowcontroller.png';
import sharkImage from '../assets/shark.png';
import sealImage from '../assets/seal.png';
import seaHorseImage from '../assets/seahorse.png';

export const COST_OF_ATOLLFORTRESS = 45;
export const COST_OF_FLOWCONTROLLER = 35;
export const ROUNDS_OF_BUILDING = 5;
export const ROUNDS_OF_UPGRADE = 15;
export const TAX = 25;

export const buildings: BuildingInterface[] = [
  {
    id: 'atollFortress',
    title: {
      row1: 'Zátonyvár',
      row2: '50 embert ad a népességhez',
      row3: '200 krumplit termel körönként',
    },
    body: ' db\n' + COST_OF_ATOLLFORTRESS + ' Gyöngy / db',
    image: atollFortressImage,
    imageAlt: 'zátonyvár',
  },

  {
    id: 'flowController',
    title: {
      row1: 'Áramlásirányító',
      row2: '200 egységnek nyújt szállást',
    },
    body: ' db\n' + COST_OF_FLOWCONTROLLER + ' Gyöngy / db',
    image: flowControllerImage,
    imageAlt: 'áramlásirányító',
  },
];

export enum unitSelectorId {
  shark='shark',
  seal="seal",
  seahorse="seahorse"
}

export const unitSelectors: UnitSelectorInterface[] = [
  {
    id: unitSelectorId.shark,
    body: 'Lézercápa: ',
    image: sharkImage,
    imgAlt: 'lézercápa',
    value: 0,
  },
  {
    id: unitSelectorId.seal,
    body: 'Rohamfóka: ',
    image: sealImage,
    imgAlt: 'rohamfóka',
    value: 0,
  },
  {
    id: unitSelectorId.seahorse,
    body: 'Csatacsikó: ',
    image: seaHorseImage,
    imgAlt: 'csatacsikó',
    value: 0,
  },
];

export var attackUserList: DisplayListElement[] = [...new Array(50)].map(
  (_, index) => ({
    id: index,
    item: index % 2 === 0 ? 'jozsiwinner12' : 'kiscsiko1990',
  })
);
