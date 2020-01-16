import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function showScoreReducer(
  state = initialState.showScore,
  action
) {
  switch (action.type) {
    case actionTypes.SHOW_SCORE:
      return action.payload;

    default:
      return state;
  }
}
