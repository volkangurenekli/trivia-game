import React, { Component } from "react";
import { connect } from "react-redux";
import Answers from "./Answers";
import Navbar from "./Navbar";

class Questions extends Component {
  decodeHtml = text => {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  render() {
    if (
      !this.props.questions ||
      (this.props.questions && this.props.questions.length === 0)
    ) {
      return null;
    } else {
      return (
        <div>
          <Navbar {...this.props} />
          <h1 className="text1">
            {this.decodeHtml(
              this.props.questions[this.props.currentQuestion].question
            )}
          </h1>
          <h6>
            {this.props.questions[this.props.currentQuestion].correct_answer}
          </h6>
          <Answers {...this.props} />
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer
  };
}

export default connect(mapStateToProps)(Questions);
