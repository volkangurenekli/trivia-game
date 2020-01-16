import React, { Component } from "react";
import { connect } from "react-redux";

import animationData from "../images/wrong.json";
import lottie from "lottie-web";
class WrongAnswerPage extends Component {
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
          onClick={() => (window.location.href = "/")}
          style={{ width: 600, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        />
        <h1 style={{ color: "#BC0000" }}>GAME OVER</h1>
        <h1 style={{ color: "#BC0000" }}>SCORE: {this.props.showScore}</h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer,
    showScore: state.showScoreReducer
  };
}

export default connect(mapStateToProps)(WrongAnswerPage);
