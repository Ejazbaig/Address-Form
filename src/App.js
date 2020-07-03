import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddressForm from "./Components/AddressForm";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AddressForm} exact />
          <Route path="/home" component={ErrorPage} />
          <Route path="/back" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
