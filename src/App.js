import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Component/Main/Login";
import SignUp from "./Component/Main/Signup";
import Dashboard from "./Component/Main/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
