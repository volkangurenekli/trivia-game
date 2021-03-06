import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from "../images/win.json";
export default class Win extends Component {
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
          style={{ width: 1200, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        />
      </div>
    );
  }
}
