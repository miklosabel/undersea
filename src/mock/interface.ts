export interface buildingInterface {
  id: string;
  title: { [key: string]: string };
  body: string;
  image: string;
  imageAlt: string;
}

export interface unitSelectorInterface {
  id: string;
  body: string;
  image: string;
  imgAlt: string;
  value: number;
}

export interface attackingArmyListInterface {
  target: string;
  sharkArmy: number;
  sealArmy: number;
  seahorseArmy: number;
}

export interface displayListElement {
  id: number;
  item: string;
}

export interface attackActionPayloadInterface {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: attackingArmyListInterface[];
}