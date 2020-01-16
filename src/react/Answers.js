import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionsActions from "../redux/actions/questionsActions";
import joker from "../images/joker.png";

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnable0: [null],
      isEnable1: [null],
      isEnable2: [null],
      isEnable3: [null],
      counterJoker: this.props.boostJoker,
      correct_answer: this.props.questions[this.props.currentQuestion]
        .correct_answer,
      tempList: [
        this.props.questions[this.props.currentQuestion].correct_answer,
        ...this.props.questions[this.props.currentQuestion].incorrect_answers
      ],
      newList: []
    };
  }
  shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  decodeHtml = text => {
    let txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  control(element) {
    if (element === this.state.correct_answer) {
      this.props.history.push("/correct");
      this.props.actions.showScore(this.props.showScore + 100);
    } else {
      this.props.history.push("/wrong");
    }
  }
  componentDidMount() {
    let a = this.shuffle(this.state.tempList);
    this.setState({ newList: a });
  }
  render() {
    return (
      <div className="container">
        <button
          style={{ backgroundColor: this.state.isEnable0 }}
          className="btn btn1"
          onClick={() => this.control(this.state.newList[0])}
        >
          {this.decodeHtml(this.state.newList[0])}
        </button>
        <br />
        <button
          style={{ backgroundColor: this.state.isEnable1 }}
          className="btn btn1"
          onClick={() => this.control(this.state.newList[1])}
        >
          {this.decodeHtml(this.state.newList[1])}
        </button>
        <br />
        <button
          style={{ backgroundColor: this.state.isEnable2 }}
          className="btn btn1"
          onClick={() => this.control(this.state.newList[2])}
        >
          {this.decodeHtml(this.state.newList[2])}
        </button>
        <br />
        <button
          style={{ backgroundColor: this.state.isEnable3 }}
          className="btn btn1"
          onClick={() => this.control(this.state.newList[3])}
        >
          {this.decodeHtml(this.state.newList[3])}
        </button>
        <hr />

        <div>
          <h2 style={{ color: "#d40000" }}>
            REMAINING {this.props.boostJoker}
          </h2>
          <img
            src={joker}
            alt="Joker"
            onClick={() => {
              if (this.props.boostJoker !== 0) {
                this.props.actions.boostJoker(0);
                if (
                  this.state.newList[0] === this.state.correct_answer ||
                  this.state.newList[1] === this.state.correct_answer
                ) {
                  this.setState({ isEnable2: "red" });
                  this.setState({ isEnable3: "red" });
                }
                if (
                  this.state.newList[2] === this.state.correct_answer ||
                  this.state.newList[3] === this.state.correct_answer
                ) {
                  this.setState({ isEnable0: "red" });
                  this.setState({ isEnable1: "red" });
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer,
    showScore: state.showScoreReducer,
    boostJoker: state.boostJokerReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      showScore: bindActionCreators(questionsActions.showScore, dispatch),
      boostJoker: bindActionCreators(questionsActions.boostJoker, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
