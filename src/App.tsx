import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import FocusMain from "./screen/FocusMain";
import TodoMain from "./screen/TodoMain";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./style/theme";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "../src/style/GlobalStyle";
import { DefaultTheme } from "styled-components";
import { RootState } from ".";
import { Dispatch } from "redux";

function App() {
  const theme = useSelector((state: RootState) => state.darkMode);
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    if (!theme) {
      dispatch({ type: "light" });
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={TodoMain} />
          <Route path="/focus" component={FocusMain} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
