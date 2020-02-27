import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";


import App from "./App";
import "./styles/base.scss";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
