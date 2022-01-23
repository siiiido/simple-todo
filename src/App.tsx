import React from 'react';
import styled from 'styled-components';
import FocusMain from './screen/FocusMain';
import TodoMain from './screen/TodoMain';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/index';
import { GlobalStyle } from './style';

const store = createStore(reducer);
export type RootState = ReturnType<typeof store.getState>

function App() {
  return (
    <>
      <GlobalStyle/>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <TodoMain/>
            </Route>
            <Route path="/focus">
              <FocusMain/>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
