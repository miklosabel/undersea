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
    nextPossibleRoundToBuild: number;
  };
}

export type IBuildingActions = startBuildAction;

export const startBuildActionCreator = (params: {
  shell: number;
  isAtollFortressBuilding: boolean;
  isFlowControllerBuilding: boolean;
  nextPossibleRoundToBuild: number;
}): startBuildAction => ({
  type: PossibleBuildingActions.START_BUILD,
  payload: params,
});
