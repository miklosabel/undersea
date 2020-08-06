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

export interface displayListElement {
  id: number;
  item: string;
}