//TODO Ennek legyen meg rendesen a request-response error actionje, és akkor készítsünk hozzá sagát.
// Backend mock van, nem teljesen elfelejteni. Sagába meg akár lehet rakni késleltetést yield delay(500)-zal, és lehet a töltés szimulálni
export interface BuildingActionTypes {
  REQUEST: 'START_BUILD_REQUEST';
  SUCCESS: 'START_BUILD_SUCCESS';
  ERROR: 'START_BUILD_ERROR';
}
export const PossibleBuildingActions: BuildingActionTypes = {
  REQUEST: 'START_BUILD_REQUEST',
  SUCCESS: 'START_BUILD_SUCCESS',
  ERROR: 'START_BUILD_ERROR',
};
export interface buildingRequestAction {
  type: BuildingActionTypes['REQUEST'];
  payload: {
    shell: number;
    isAtollFortressBuilding: boolean;
    isFlowControllerBuilding: boolean;
    roundsBeforeNewBuilding: number;
  };
}
export interface buildingResponseAction {
  type: BuildingActionTypes['SUCCESS'];
  payload: boolean;
}
export interface BuildErrorAction {
  type: BuildingActionTypes['ERROR'];
  payload: string;
}

export type IBuildingActions =
  | buildingRequestAction
  | buildingResponseAction
  | BuildErrorAction;

export const buildingRequestActionCall = (params: {
  shell: number;
  isAtollFortressBuilding: boolean;
  isFlowControllerBuilding: boolean;
  roundsBeforeNewBuilding: number;
}): buildingRequestAction => ({
  type: PossibleBuildingActions.REQUEST,
  payload: params,
});

export const buildingResponseActionCall = (
  response: boolean
): buildingResponseAction => ({
  type: PossibleBuildingActions.SUCCESS,
  payload: response,
});
export const buildingErrorActionCall = (error: string): BuildErrorAction => ({
  type: PossibleBuildingActions.ERROR,
  payload: error,
})