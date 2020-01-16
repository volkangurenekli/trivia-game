import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as questionsActions from "../redux/actions/questionsActions";
import { Icon } from "antd";
import { Radio } from "antd";
import trivia from "../images/trivia.png";
import lottie from "lottie-web";
import animationData from "../images/welcome.json";

class Welcome extends Component {
  componentDidMount() {
    lottie.loadAnimation({
      container: this.animBox,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }

  constructor() {
    super();

    this.state = {
      category: "9"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <img alt="example" src={trivia} />
        </div>
        <div>
          <Radio.Group defaultValue="10" buttonStyle="solid" size="large">
            <Radio.Button
              className="category"
              checked={this.state.category === "9"}
              onChange={this.handleChange}
              value="10"
            >
              <h2>GENERAL</h2>
            </Radio.Button>
            <Radio.Button
              className="category"
              checked={this.state.category === "15"}
              onChange={this.handleChange}
              value="15"
            >
              <h2>GAMES</h2>
            </Radio.Button>
            <Radio.Button
              className="category"
              checked={this.state.category === "18"}
              onChange={this.handleChange}
              value="18"
            >
              <h2>COMPUTERS</h2>
            </Radio.Button>
            <Radio.Button
              className="category"
              checked={this.state.category === "19"}
              onChange={this.handleChange}
              value="19"
            >
              <h2>MATHEMATICS</h2>
            </Radio.Button>
            <Radio.Button
              className="category"
              checked={this.state.category === "20"}
              onChange={this.handleChange}
              value="20"
            >
              <h2>MYTHOLOGY</h2>
            </Radio.Button>
            <Radio.Button
              className="category"
              checked={this.state.category === "23"}
              onChange={this.handleChange}
              value="23"
            >
              <h2>HISTORY</h2>
            </Radio.Button>
          </Radio.Group>
        </div>
        <Icon
          className="icon"
          style={{ fontSize: "160px", color: "green", margin: "30px" }}
          onClick={() => this.selectDifficulty(this.state.category, "easy")}
          type="play-circle"
          description={<h1>easy</h1>}
        />

        <Icon
          className="icon"
          style={{ fontSize: "160px", color: "yellow", margin: "30px" }}
          onClick={() => this.selectDifficulty(this.state.category, "medium")}
          type="play-circle"
        />

        <Icon
          className="icon"
          style={{ fontSize: "160px", color: "red", margin: "30px" }}
          onClick={() => this.selectDifficulty(this.state.category, "hard")}
          type="play-circle"
        />
      </div>
    );
  }

  selectDifficulty = (category, difficulty) => {
    this.props.actions.getQuestions(category, difficulty);
    this.props.history.push("/questions");
  };
}

function mapStateToProps(state) {
  return {
    questions: state.getQuestionsReducer,
    currentQuestion: state.changeQuestionReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getQuestions: bindActionCreators(questionsActions.getQuestions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
