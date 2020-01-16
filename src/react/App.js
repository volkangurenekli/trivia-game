import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import WrongAnswer from "./WrongAnswer";
import CorrectAnswer from "./CorrectAnswer";
import Welcome from "./Welcome";
import Questions from "./Questions";
import Win from "./Win";
import TimeIsUp from "./TimeIsUp";
function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/wrong" component={WrongAnswer} />
        <Route path="/correct" component={CorrectAnswer} />
        <Route path="/questions" component={Questions} />
        <Route path="/win" component={Win} />
        <Route path="/timeisup" component={TimeIsUp} />
      </Switch>
    </Container>
  );
}
export default App;
