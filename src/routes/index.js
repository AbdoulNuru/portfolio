import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";

export default class index extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}
