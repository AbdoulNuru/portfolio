import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
// import Loading from "../components/Loading";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
         {/* <Route path="/l" exact component={Loading} /> */}
      </Switch>
    );
  }
}
