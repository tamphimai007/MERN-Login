import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/reducers/index";

// Route
import { BrowserRouter } from "react-router-dom";
// Antd
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
