import React from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Body from "../src/Components/Body";
import Projects from './Components/Projects';
import CV from './Components/CV';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SideBar />
            <Body />
          </Route>
          <Route exact path="/projects">
            <SideBar />
            <Projects />
          </Route>
          <Route exact path="/cv">
          <SideBar />
            <CV/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
