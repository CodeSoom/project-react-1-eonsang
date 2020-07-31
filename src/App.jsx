import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Calendar from "./containers/Calendar/Calendar";
import Write from "./containers/Write/Write";
import Map from "./containers/Map/Map";
import Mypage from "./containers/Mypage/Mypage";

import Wrapper from "./components/Wrapper";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/write" component={Write} />
        <Route path="/map" component={Map} />
        <Route path="/mypage" component={Mypage} />
      </Switch>

      <Navigation />
    </Wrapper>
  );
}
