import "antd/dist/antd.css";
import { PageHeader, Descriptions } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { seconds: 15 };
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick() {
    if (this.state.seconds > 0) {
      this.setState({ seconds: this.state.seconds - 1 });
    } else {
      clearInterval(this.timer);
      this.props.history.push("/timeisup");
    }
  }

  render() {
    return (
      <div>
        <PageHeader style={{ backgroundColor: "#6E94A9" }} ghost={false}>
          <Descriptions size="medium" column={3}>
            <Descriptions.Item>
              <h1>QUESTION : {this.props.currentQuestion + 1}/10</h1>
            </Descriptions.Item>
            <Descriptions.Item>
              <h1>SCORE : {this.props.showScore}</h1>
            </Descriptions.Item>
            <Descriptions.Item>
              <h1>TIME : {this.state.seconds}</h1>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
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

export default connect(mapStateToProps)(Navbar);
