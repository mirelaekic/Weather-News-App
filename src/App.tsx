import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import Login from "./components/Login&Register/Login";
import Home from "./pages/Home";
import Register from "./components/Login&Register/Register"
import { BrowserRouter, Route ,Switch } from "react-router-dom";

const App: FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
