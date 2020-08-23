//Ennek legyen meg rendesen a request-response error actionje, és akkor készítsünk hozzá sagát. Backend mock van, nem teljesen elfelejteni. Sagába meg akár lehet rakni késleltetést yield delay(500)-zal, és lehet a töltés szimulálni
export interface BuildingActionTypes {
  START_BUILD: 'BUILDING_START_BUILD';
}

export const PossibleBuildingActions: BuildingActionTypes = {
  START_BUILD: 'BUILDING_START_BUILD',
};

export interface startBuildAction {
  type: BuildingActionTypes['START_BUILD'];
  payload: {
    shell: number;
    isAtollFortressBuilding: boolean;
    isFlowControllerBuilding: boolean;
    roundsBeforeNewBuilding: number;
  };
}

export type IBuildingActions = startBuildAction;

export const startBuildActionCreator = (params: {
  shell: number;
  isAtollFortressBuilding: boolean;
  isFlowControllerBuilding: boolean;
  roundsBeforeNewBuilding: number;
}): startBuildAction => ({
  type: PossibleBuildingActions.START_BUILD,
  payload: params,
});
