import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getQuestionsSuccess(questions) {
  return { type: actionTypes.GET_QUESTIONS, payload: questions };
}

export function changeQuestion(index) {
  return { type: actionTypes.CHANGE_QUESTION, payload: index };
}

export function getQuestions(category, difficulty) {
  return async function(dispatch) {
    await axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      )

      .then(result => dispatch(getQuestionsSuccess(result.data.results)))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
}

export function showScore(score) {
  return { type: actionTypes.SHOW_SCORE, payload: score };
}

export function boostJoker(joker) {
  return { type: actionTypes.BOOST_JOKER, payload: joker };
}
