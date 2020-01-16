import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeQuestionReducer(
  state = initialState.currentQuestion,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_QUESTION:
      return action.payload;

    default:
      return state;
  }
}
