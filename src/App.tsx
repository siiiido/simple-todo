import React from 'react';
import FocusMain from './screen/FocusMain';
import TodoMain from './screen/TodoMain';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
