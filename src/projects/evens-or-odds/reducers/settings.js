import { SET_GAME_STARTED, SET_INTSRUCTIONS_EXPANDED } from "../actions/types";

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};

//decides how store is updated
const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted
      };
    case SET_INTSRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded
      };

    default:
      return state;
  }
};

export default settingsReducer;
