import { buildingInterface } from './interface';
import atollFortressImage from '../assets/atollfortress.png';
import flowControllerImage from '../assets/flowcontroller.png';

export const COST_OF_ATOLLFORTRESS = 45;
export const COST_OF_FLOWCONTROLLER = 35;
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
