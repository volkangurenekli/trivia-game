import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionsActions from "../redux/actions/questionsActions";
import lottie from "lottie-web";
import animationData from "../images/correct.json";
class CorrectAnswerPage extends Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this.animBox,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }
  render() {
    return (
      <div>
        <div
          onClick={() => this.isDone(this.props.currentQuestion)}
          style={{ width: 600, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        />

        <h1 style={{ color: "#00FF00" }}>SCORE: {this.props.showScore}</h1>
      </div>
    );
  }

  isDone(control) {
    if (control < 9) {
      this.props.actions.changeQuestion(this.props.currentQuestion + 1);
      this.props.history.push("/questions");
    } else {
      this.props.actions.showScore(0);
      this.props.actions.changeQuestion(this.props.currentQuestion + 1);
      this.setState({ questions: [] });
      this.setState({ currentQuestion: 0 });
      this.props.history.push("/win");
    }
  }
}
function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer,
    showScore: state.showScoreReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getQuestions: bindActionCreators(questionsActions.getQuestions, dispatch),
      changeQuestion: bindActionCreators(
        questionsActions.changeQuestion,
        dispatch
      ),
      showScore: bindActionCreators(questionsActions.showScore, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswerPage);
