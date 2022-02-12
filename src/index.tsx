import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { reducer, darkMode } from "./redux/index";
import { Provider } from "react-redux";
import { combineReducers } from "redux";


const store = createStore(combineReducers({reducer, darkMode}));
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
