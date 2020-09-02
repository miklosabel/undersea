export interface BuildingInterface {
  id: string;
  title: { [key: string]: string };
  body: string;
  image: string;
  imageAlt: string;
}

export interface UnitSelectorInterface {
  id: string;
  body: string;
  image: string;
  imgAlt: string;
  value: number;
}

export interface AttackingArmyListInterface {
  target: string;
  sharkArmy: number;
  sealArmy: number;
  seahorseArmy: number;
}

export interface DisplayListElement {
  id: number;
  item: string;
}

export interface AttackActionPayloadInterface {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: AttackingArmyListInterface[];
}

// export interface LoadingStatusInterface<P,D> {
//   params: P;
//   data: D;
//   isLoading: boolean;
//   isDataLoaded: boolean;
//   isError: boolean;
//   error: string;
// }

export interface LoadingStatusInterface {
  isLoading: boolean;
  isDataLoaded: boolean;
  isError: boolean;
  error: string;
}