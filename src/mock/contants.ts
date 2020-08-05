import {
  buildingInterface,
  unitSelectorInterface,
  displayListElement,
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

export const buildings: buildingInterface[] = [
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

export const unitSelectors: unitSelectorInterface[] = [
  {
    id: 'shark',
    body: 'Lézercápa: ',
    image: sharkImage,
    imgAlt: 'lézercápa',
  },
  {
    id: 'seal',
    body: 'Rohamfóka: ',
    image: sealImage,
    imgAlt: 'rohamfóka',
  },
  {
    id: 'seahorse',
    body: 'Csatacsikó: ',
    image: seaHorseImage,
    imgAlt: 'csatacsikó',
  },
];

export var attackUserList: displayListElement[] = new Array();
for (let i = 0; i < 50; i++) {
  attackUserList.push({
    id: i,
    item: i % 2 === 0 ? 'jozsiwinner12' : 'kiscsiko1990',
  });
}
