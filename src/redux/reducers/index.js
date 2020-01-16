import { combineReducers } from "redux";
import getQuestionsReducer from "./getQuestionsReducer";
import changeQuestionReducer from "./changeQuestionReducer";
import showScoreReducer from "./showScoreReducer";
import boostJokerReducer from "./boostJokerReducer";
const rootReducer = combineReducers({
  getQuestionsReducer,
  changeQuestionReducer,
  showScoreReducer,
  boostJokerReducer
});

export default rootReducer;
