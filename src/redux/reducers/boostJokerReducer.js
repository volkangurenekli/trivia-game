import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function boostJokerReducer(
  state = initialState.boostJoker,
  action
) {
  switch (action.type) {
    case actionTypes.BOOST_JOKER:
      return action.payload;

    default:
      return state;
  }
}
