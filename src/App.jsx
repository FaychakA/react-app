import React from 'react';
import {
  Switch,
    Route
} from 'react-router-dom';
import MainPage from "./MainPage";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Switch>
        <Route
            path="/"
            exact
            component={MainPage}
        />

        <Route
            path="/login"
            component={Login}
        />

        <Route
            path="/profile"
            component={Profile}
        />
      </Switch>
    </div>
  );
}

export default App;
