import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home";

import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Navigation />
    </Wrapper>
  );
}
