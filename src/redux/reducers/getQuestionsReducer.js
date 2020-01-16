import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function getQuestionsReducer(
  state = initialState.questions,
  action
) {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return action.payload;
    default:
      return state;
  }
}
